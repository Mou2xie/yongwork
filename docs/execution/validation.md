# T09 Final Validation

版本：2026-09-30 · 独立验证记录
基线对照：`docs/execution/baseline.md` 与 `docs/execution/visual-baseline/`

所有结果均为实际运行记录。未运行的检查明确写「未运行」。

## 1. 构建与测试

| 检查 | 命令 | 结果 |
| --- | --- | --- |
| 生产构建 | `npx ng build` | **通过**，退出码 0。Browser initial 415.15 kB（估算传输 105.09 kB），低于 500 kB warning 预算。Prerendered 4 static routes |
| 单元测试 | `npx ng test --watch=false` | **通过**，退出码 0。2 个文件 / 8 个测试全部通过（基线时为 1 failed） |
| 类型检查 | `npx tsc -p tsconfig.app.json --noEmit` | 通过 |

## 2. 路由与素材

| 检查 | 结果 |
| --- | --- |
| 20 个路由（含 `detail/1..9`、`300..305`、`9999`）HTTP 状态 | 全部 200 |
| catalog 中 21 个 cover 文件存在性 | 全部存在，0 缺失 |
| 全部 `.data.ts` 引用的图片路径存在性 | 0 缺失 |
| 新增素材 HTTP 可达 | `/projects/novaagent/cover.png`、`/projects/fixmycity/cover.png`、`/projects/fixmycity/1.png`、`/projects/tendermaster/cover.png` 均 200 |

## 3. 浏览器实测（agent-browser 0.27.0）

在 1440×1000、390×844、768×1024 三个视口，对 `/`、`/portfolio`、`/about-me`、`/contact`、`/detail/304`、`/detail/305`、`/detail/9`、`/detail/9999` 共 24 次页面加载：

| 指标 | 结果 |
| --- | --- |
| 破损图片 | 0 |
| 缺少 `alt` 的 `<img>` | 0 |
| 无 `href` 的 `<a>` | 0 |
| 水平溢出（`scrollWidth > clientWidth`） | 0（三个视口全部相等） |

### 交互验证

| 场景 | 结果 |
| --- | --- |
| Portfolio 标签筛选：点击 `AI Applications` | `aria-pressed` 正确切换，卡片数 20 → 7 |
| 内部卡片导航：点击 NovaAgent 卡片 | 路由到 `/detail/304`，Snapshot 正确渲染 `Role / Timeline / Scope / Status` |
| 外部卡片：Design 卡片 | `href` 指向 Figma，`target="_blank"`，`rel="noopener noreferrer"` |
| 主导航：Portfolio → About Me | SPA 路由到 `/about-me` |
| 无图详情页（Tender Master, id 305） | 不渲染轮播容器 |
| 无效 ID（9999） | 渲染 "Project Not Found" + 返回 Portfolio 链接 |
| Portfolio 卡片链接完整性 | 20 张卡片：14 内部 `/detail/*` + 6 外部 `http*`，0 缺失 `href` |

## 4. 内容与事实核对

对照 `docs/content-source-map.md` 逐项核对：

| 项目 | 结果 |
| --- | --- |
| 邮箱 `jedxie2022@gmail.com`（修正 `jadxie2022` 拼写） | 通过，首页/About/Contact/Footer 一致 |
| 定位 `Applied AI & Full-Stack Developer` | 通过，旧 "More Than a Developer" 已移除 |
| About 不再显示 `Student` / `2024 - Present` | 通过 |
| 新增 Software Developer (Part-time), Private Client, Oct–Dec 2025 | 通过 |
| Education 区块：diploma 名称、2024–2026、High Distinction、GPA 3.79/4.0、本科 | 通过 |
| Recognition 区块：两个奖项均标注 team scope | 通过 |
| SpeakingPass `1,150 MAU · Aug 2026` | 通过，未与其他产品聚合 |
| Transider `1,100+ MAU · Aug 2026` | 通过 |
| Agent Yong 无 `hallucination-free` / 低延迟保证 / 旧固定函数描述 | 通过 |
| Agent Yong 描述为 file-based agentic RAG，明确无 vector search | 通过 |
| NovaAgent 标注 5 人团队与个人贡献边界 | 通过 |
| Fix My City 标注团队范围，不声称个人 Flutter 实现 | 通过 |
| Fix My City 不写城市采用或合作 | 通过 |
| Tender Master 独立案例，不写合规保证 / 并行生成 | 通过 |
| Tender Master 与旧 n8n 项目分别维护，不共用截图 | 通过 |
| LingoPick 标注 discontinued | 通过 |
| grokani.love 不出现在公开列表 | 通过 |
| yongxie.dev 渲染描述与实际配置一致 | 通过（README 与案例正文均已更正） |

### 移除的旧表述（全部已确认不存在）

`100% compliance`、`million-word scale`、`significantly increasing the probability of winning tenders`、`Token Usage ROI`、`hallucination-free`、`virtually zero client-side JavaScript`、`full SEO coverage`、`guaranteed moderation`、聚合 MAU、「七个独立产品」。

## 5. UI 风格保留验证（执行计划 §2.1）

| 约束 | 结果 |
| --- | --- |
| `src/styles.css` 未修改 | **通过**（`git diff` 为空） |
| `MainLayout` 未修改 | 通过 |
| `Title` 组件未修改 | 通过 |
| `ContentSection` 组件未修改 | 通过 |
| 全局色值 `#212121` / `#3EF050` / `#DEDEDE` / `#B6B6B6` | 保留 |
| 字体 Anton / Roboto Flex | 保留 |
| 导航品牌 `YONGXIE.DEV`、固定导航、简单页脚 | 保留（仅更新入口文字为 "Ask Agent Yong"） |
| 插画与绿色问答入口语言 | 保留 |
| 卡片基本结构（封面 + 项目名 + 简介 + 平台） | 保留，新增范围/证据文字标签 |

对照 `docs/execution/visual-baseline/` 与 `docs/execution/visual-final/`：背景、字体、强调色、导航、插画、区块标题一致。允许的变化为区块顺序（精选项目提前）、文案、卡片新增标签与页高变化。

## 6. 本轮修复的基线缺陷

| 编号 | 基线问题 | 状态 |
| --- | --- | --- |
| B-1 | 邮箱拼写 `jadxie2022` | 已修复 |
| B-2 | 定位文案过时 | 已修复 |
| B-3 | 技能含无依据项、缺分层 | 已修复 |
| B-4 | About 显示在读 | 已修复 |
| B-5 | 缺 2025 工程经历 | 已修复 |
| B-6 | 无 Education / Recognition | 已修复 |
| B-7 | 缺三个项目案例 | 已修复 |
| B-8 | 精选顺序隐式依赖数组顺序 | 已修复（显式 `featuredOrder`） |
| B-9 | 卡片为不可聚焦 `div` | 已修复（真实 `<a>` + `aria-label`） |
| B-10 | 无图详情渲染空轮播 | 已修复 |
| 测试 | `app.spec.ts` 断言 `Hello, yongwork` 失败 | 已修复（改为断言 router-outlet） |
| README | SSR 与必填字段的不实描述 | 已更正 |

### 实施过程中发现并修复的新问题

| 问题 | 发现方式 | 修复 |
| --- | --- | --- |
| `/portfolio` 在 390px 下水平溢出（418 > 375） | 视口 `scrollWidth` 测量 | 卡片标题行改为 `flex-wrap`，范围标签可换行 |
| Design 卡片渲染为**无 `href`** 的锚点 | DOM 审计 | `[attr.href]="null"` 会压制 RouterLink 生成的 href；改为 `@if` 分支：外部用纯 `href`，内部只用 `routerLink` |
| `.data.ts` 引用不存在的 `/projects/novaagent/1.png` | 素材存在性校验 | `image` 置空，并补齐真实 cover |

## 7. 未完成项

| 项目 | 原因 |
| --- | --- |
| `/detail/:id` 预渲染、Open Graph、sitemap | 属 T10 可选范围，需先确认部署方式；本轮按计划未修改 `app.routes.server.ts` |
| NovaAgent gallery 截图 | 需登录后台；本轮仅公开首屏可访问 |
| Tender Master 真实界面截图 | CLI 工具且涉及客户保密；使用明确标注的占位封面 |
| Agent Yong gallery 与当前实现的一致性 | 未重新抓取，未删除旧素材 |
| Fix My City 移动端截图 | 需模拟器/真机，本轮不引入该工具链 |
| 外部链接实时可用性 | 未运行；按执行计划 T09 第 8 条，按实际检查日期记录 |
| 像素级视觉回归 | 未运行图像 diff；采用人工对照 30 张基线与最终截图 |

## 8. 结论

核心范围已完成：事实准确、页面与案例接入完整、地址兼容、素材引用有效、构建与测试通过、现有 UI 风格保留。

**未完成项均为 T10 可选 SEO 范围或缺少真实素材，不影响核心内容交付。** 部署未执行，符合原计划约束。
