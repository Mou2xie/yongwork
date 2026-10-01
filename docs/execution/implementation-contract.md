# Implementation Contract

版本：v1 · 2026-09-30 · 由协调 agent 维护
依据：[执行与 Agent 交接计划](../website-content-execution-plan.md) §4

本文件固定在并行改动开始前确定的数据结构、接口与展示规则。实际实现与本文档的差异记录在 §6。

## 1. 类型与文件

| 文件 | 职责 |
| --- | --- |
| `src/app/core/models/portfolio.models.ts` | 全部共享类型：`Category`、`Platform`、`ProjectTag`、`ProjectKind`、`ProjectStatus`、`ProjectSummary`、`ProjectLink`、`IProjectContent` |
| `src/app/core/data/projectCatalog.data.ts` | 公开项目目录与 `PROJECT_TAGS` |
| `src/app/core/data/profile.data.ts` | `PROFILE`、`EXPERIENCE`、`EDUCATION`、`AWARDS` |
| `src/app/core/data/skills.data.ts` | `SKILLS`、`HOME_SKILL_GROUPS`、`ABOUT_SKILL_TIERS` |
| `src/app/assets/projectContent/IProjectContent.ts` | 向后兼容 re-export（原 `IProjectContent` 定义已迁移到 models） |

### 1.1 `ProjectSummary`

```ts
interface ProjectSummary {
  id: number;
  projectName: string;
  category: Category;          // 兼容原有侧栏分类
  description: string;
  cover: string;
  platform: Platform[];        // 新增 'CLI'
  featured: boolean;
  featuredOrder?: number;      // 升序；仅 featured 为 true 时有意义
  url?: string;                // 存在时卡片外链，否则路由到 /detail/:id
  tags: ProjectTag[];
  kind: ProjectKind;           // 项目"是什么"
  status: ProjectStatus;       // 项目"现在怎样"
  role?: string;
  teamSize?: number;
  timeline?: string;
  visibility: boolean;         // false = 不进列表/筛选/精选
  scopeLabel?: string;         // 卡片范围标签
  highlight?: string;          // 卡片证据行（指标/奖项）
}
```

`kind` 与 `status` 是正交维度，不能互相替代：`kind` 表达合作范围，`status` 表达当前状态。

### 1.2 `IProjectContent`

保留原有 `id` / `projectName` / `description` / `links` / `image` / `content` 字段（向后兼容），新增可选展示字段：`role`、`status`、`teamSize`、`timeline`、`scopeNote`。全部可选，保证补充记录可以省略而不破坏编译。

`content` 为本地编写并人工审阅的 HTML 字符串，经 Angular `[innerHTML]` 绑定渲染。**不绕过 Angular 的 HTML 安全处理**，不添加 `bypassSecurityTrustHtml`。

## 2. 服务接口

`PortfolioService`：

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `portfolioTags` | `ProjectTag[]` | 侧栏筛选标签，`All` 在首位 |
| `portfolioCategories` | `Category[]` | 兼容旧侧栏；由 catalog 派生 |
| `getAllProjects()` | `ProjectSummary[]` | 仅公开可见 |
| `getFeaturedProjects()` | `ProjectSummary[]` | 按 `featuredOrder` 升序，取前 3 |
| `getProjectsByTag(tag)` | `ProjectSummary[]` | `All` 返回全部；不产生重复 |
| `getPortfolioProjectsByCategory(c)` | `ProjectSummary[]` | 迁移期兼容 |
| `getProjectSummary(id)` | `ProjectSummary \| undefined` | 隐藏项目返回 `undefined` |

兼容别名：`export type Project = ProjectSummary`。原有 `import type { Project }` 的调用点无需改动。

`ProjectContentService`：`getProjectContent(id)` 保持不变。

### 2.1 兼容策略

- 保留 `getFeaturedProjects()`、`getProjectContent(id)` 的原有名称与可用性。
- 旧分类查询通过 `getPortfolioProjectsByCategory` 适配保留；页面已切换到标签筛选。
- 隐藏项目的处理分两层：**列表/筛选/精选不暴露**，但 `getProjectContent` 仍可解析其 id，使既有详情地址不 404。

## 3. 展示规则

### 3.1 项目 ID

| 区间 | 含义 |
| --- | --- |
| 1–8 | Web 产品与扩展 |
| 9 | 团队案例（Fix My City） |
| 300–305 | AI 与自动化工作流 |
| 500–505 | 设计稿（design artifact） |

ID 唯一，由测试 `portfolioService.service.spec.ts` 断言。已发布 ID 不得重编号。

### 3.2 精选顺序

固定为 **NovaAgent(304) → Agent Yong(303) → SpeakingPass(2)**，由 `featuredOrder` 表达，**不依赖数组顺序**。

### 3.3 标签

`All`、`AI Applications`、`Web Products`、`Browser Extensions`、`Client Delivery`、`Design`。
一个项目可有多个标签；因为筛选在单一 catalog 列表上进行，任一视图内不会重复出现。

### 3.4 可见性

`visibility: false` 的项目（当前仅 `grokani.love`，id 5）不出现在任何公开查询中。设计稿（500–505）带 Figma `url`，卡片外链，不进入详情路由。

### 3.5 缺图处理

- 详情页 `image` 为空数组时不渲染轮播容器。
- 只有 1 张图时不渲染切换按钮与圆点。
- 卡片 `cover` 必填，因此每个公开项目都必须有可用封面文件（见 `asset-manifest.md`）。

### 3.6 详情页快照

`role` / `timeline` / `teamSize` / `status` 有值才渲染对应项；`teamSize > 1` 显示 `Team of N`，否则显示 `Independent`。`scopeNote` 用于说明个人贡献与团队系统的边界。

## 4. 内容与样式约定

- 正文小标题统一使用现有语言：`class="font-anton text-xl text-highlight-text mt-10 mb-5"`。不引入第二套案例页主题。
- 不修改 `src/styles.css`、字体加载、全局色值、`MainLayout`、`Title`、`ContentSection`（执行计划 §2.1）。已通过 `git diff` 核实未修改。
- 卡片简介最多两行（`line-clamp-2`）。
- 主要案例正文按 **Problem & Audience → My Contribution → Implementation → Outcomes → Trade-offs & Current Status** 组织，规模较小的记录可精简。

## 5. 事实边界（写入正文时遵守）

- 不发布聚合用户数；MAU 逐项目标注月份与来源。
- 团队奖项必须标注 team scope。
- 不承诺合规性、正确性或速度；不使用 `hallucination-free`、`100% compliance` 等表述。
- 区分 file-based agentic RAG（Agent Yong）与 vector RAG（NovaAgent）。
- 不把 Smart Message Relay 写成已上线应用。
- 不发布 `claim_status` 等事实库内部字段。

## 6. 实际实现与契约的差异

| 项 | 契约 | 实际 | 原因 |
| --- | --- | --- | --- |
| `platform` 中的 `undefined` | 保留原联合成员 | 保留 | 避免破坏旧数据；新记录不再使用 `undefined`，改用 `[]` |
| Tender Master 封面 | 需真实截图 | 使用按设计语言生成、明确标注「No UI captured」的占位封面 | 该项目为 CLI，无界面可截图；不伪造产品界面 |
| NovaAgent / Fix My City 素材 | 需界面截图 | 已获取真实产品站点截图 | 见 `asset-manifest.md` |
| 详情页预渲染 | 本轮不改渲染方式 | 未改 `app.routes.server.ts` | 属 T10 可选范围 |
