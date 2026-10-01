# T00 基线报告

- 状态：Done
- 执行日期：2026-09-30
- 执行人：协调 agent
- 依据：[网站内容更新方案](../website-content-update-plan.md)、[执行与 Agent 交接计划](../website-content-execution-plan.md)

本阶段只记录实施前状态，**未修改任何业务代码**。以下命令结果均为实际运行记录。

## 1. 起始 revision 与工作区状态

| 项目 | 值 |
| --- | --- |
| 分支 | `v2` |
| 起始 revision | `b2a3d96` (feat: Update performance architecture from Gemini Flash to DeepSeek V4.1 Flash...) |
| `git status --short` | `?? docs/` （仅本轮新增的 docs 目录，无其他用户改动） |
| Node | v22.23.3 |
| npm | 10.9.9 |
| 依赖状态 | `node_modules/` 已存在且可用；未重装、未升级依赖 |

结论：工作区在开始前是干净的，除 `docs/` 外没有需要保留的未提交改动。不存在被覆盖的用户变更风险。

## 2. 事实库可读性检查

| 检查 | 结果 |
| --- | --- |
| 事实库根目录 `/Users/xieyongjie/Documents/Vault/Resume` | 存在 |
| `AGENTS.md` / `00-Start Here.md` / `WORKSPACE_BASELINE.md` | 已读取 |
| `Facts/` 全部文件 | 已读取（Candidate、Skills、Claim Registry、Source Records 引用、Conestoga Coursework、Design Portfolio、Projects/ 全部 7 个文件） |
| 事实库写入 | **未发生**。Facts/ 为只读使用 |

事实库 `last_updated` 为 2026-09-29，当前日期 2026-09-30，与内容方案的版本日期一致，方案中的 MAU 与运行状态事实仍然有效。

## 3. 构建与测试基线

### 生产构建

```sh
npx ng build
```

- 退出码：0
- 结果：Browser initial total 374.18 kB (估算传输 97.21 kB)，低于 500 kB warning 预算
- Prerendered 4 static routes: `/`、`/about-me`、`/contact`、`/portfolio`
- 输出：`dist/yongwork`

### 单元测试

```sh
npx ng test --watch=false
```

- 退出码：1（1 failed | 1 passed）
- 失败项：`src/app/app.spec.ts > App > should render title`
  - 断言 `compiled.querySelector('h1')?.textContent` 含 `Hello, yongwork`
  - 实际：`App` 模板只有 `<router-outlet />`，不存在 `h1`，断言拿到 `undefined`
- 定性：**已有问题**（Angular 脚手架残留），不是本轮引入。按执行计划 T09 第 6 条处理。

## 4. 渲染模式实测（重要基线事实）

对 dev server (`npx ng serve --host 127.0.0.1 --port 4200`) 直接抓取服务端返回的 HTML：

| 路由 | 返回 HTML 字节数 | 是否含页面正文 |
| --- | ---: | --- |
| `/` | 14,459 | 是 |
| `/portfolio` | 11,180 | 是 |
| `/about-me` | 9,479 | 是 |
| `/contact` | 5,010 | 是 |
| `/detail/303` | 443 | **否**（client shell） |
| `/detail/2` | 443 | **否**（client shell） |

结论：`detail/:id` 在 `app.routes.server.ts` 中被显式设为 `RenderMode.Client`，案例正文不进入初始 HTML。README 与 `yongwork.data.ts` 中「案例页 SSR / 立即被索引」的表述**与实现不符**；本轮不得沿用该描述（执行计划 T04、T08）。

## 5. 基线截图

位置：`docs/execution/visual-baseline/`

| 视口 | 文件 |
| --- | --- |
| 1440×1000 | `desktop-home.png`、`desktop-portfolio.png`、`desktop-about.png`、`desktop-contact.png`、`desktop-detail-agentyong.png`、`desktop-detail-speakingpass.png` |
| 390×844 | `mobile-home.png`、`mobile-portfolio.png`、`mobile-about.png`、`mobile-contact.png`、`mobile-detail-agentyong.png`、`mobile-detail-speakingpass.png` |

工具：agent-browser 0.27.0（Chrome via CDP），`--full` 全页截图。
备注：截图需要浏览器 daemon 写入 `~/.agent-browser`，超出 workspace 沙箱范围，已获得用户一次性授权后完成。768px 过渡宽度将在 T09 补查。

已确认的基线视觉特征（用于 T09 对照）：深灰 `#212121` 背景、亮绿 `#3EF050` 强调色、Anton 标题 + Roboto Flex 正文、`< TITLE />` 区块标题、固定导航含 `YONGXIE.DEV` 品牌与绿色 "Chat with me" 按钮、卡片为封面 + 项目名 + 一行简介 + 平台图标。

## 6. 基线内容差异（供 T01/T05/T06 引用）

以下为**实测**到的现状问题，全部属于「已有问题」，本轮需要修正：

| # | 现象 | 证据位置 | 事实库要求 |
| --- | --- | --- | --- |
| B-1 | 邮箱为 `jadxie2022@gmail.com` | 渲染后的首页与 Contact 页均含 `jadxie2022`，不含 `jedxie2022` | `Candidate.md`：`jedxie2022@gmail.com` |
| B-2 | 定位文案为 "More Than a Developer"、"Product Manager turned Developer" | `features/index/index.html` | 方案 §3：Applied AI & Full-Stack Developer |
| B-3 | 技能区含 Nuxt、PHP、Stitch、MySQL、MongoDB，且无 Python 之外的 AI 层级 | `features/index/index.route.ts` | 方案 §5：Nuxt/PHP/Stitch 不支持，AWS/MySQL/MongoDB 归课程接触 |
| B-4 | About 将 Conestoga 写为 `Student` / `2024 - Present` | `features/about-me/about-me.route.ts` | `Candidate.md`：2024–2026 已毕业，High Distinction，GPA 3.79/4.0 |
| B-5 | 缺少 2025 年 10–12 月 Software Developer (Part-time) 经历 | `about-me.route.ts` 无该条目 | `Candidate.md`：Yu Yang，Sm​​art Message Relay |
| B-6 | 无 Education / Recognition 区块 | About 页 | 方案 §4 页面结构 |
| B-7 | 缺少 NovaAgent、Fix My City、Tender Master 案例 | 服务注册表只有 12 条内容 | 方案 §6 主推项目 |
| B-8 | 首页精选顺序依赖列表顺序隐式截断 | `portfolioService.getFeaturedProjects()` | 方案 §6：明确 NovaAgent → Agent Yong → SpeakingPass |
| B-9 | 卡片为不可聚焦的 `div`，无 aria-label | `product-list-item.html` | 方案 §2.2：改为可聚焦链接/按钮 |
| B-10 | 详情页无图时仍渲染空轮播容器 | `features/detail/detail.html` | 方案 §6 T06 第 5 条：0 图隐藏、1 图不显示切换 |

补充观察（未定性为本轮缺陷）：`Facts/Projects/Other Projects.md` 记录 LingoPick 已停止运营，而当前首页将其作为精选项目展示；`grokani.love` 按事实库默认规则不进入公开列表。

## 7. 已有问题与新增问题的区分

| 分类 | 项目 |
| --- | --- |
| 已有问题（实施前就存在） | `app.spec.ts` 标题断言失败；README 与案例数据的 SSR 过度宣称；B-1 ~ B-10 |
| 本轮新增问题 | 无（本阶段未改业务代码） |

## 8. 本阶段未完成项

- 768px 过渡宽度截图：未完成，计划在 T09 补查。
- 外部链接实时可用性：未检查，将在 T09 按实际检查日期记录。
