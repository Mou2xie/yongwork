# 个人网站内容更新方案

审阅稿 · 2026-09-30

定位已确认：**Applied AI + Full-Stack**。网站正文继续使用英文，本方案使用中文说明。

执行约束补充：**必须保留当前 UI 风格**，包括色值、字体、插画和现有组件的视觉语言。详细任务划分、文件所有权与验收方式见[执行与 Agent 交接计划](website-content-execution-plan.md)。

本方案依据 Resume 的 `Facts/`、`Claim Registry` 和网站当前源代码整理。本次仅创建方案，未修改网站页面或简历事实库，也未验证外部网站的实时可用性。

## 1. 更新目标与范围

让访问者在首页迅速了解三件事：你现在做什么、你亲手实现过什么、哪些项目有真实使用或团队成果。

推荐对外定位为 **Applied AI & Full-Stack Developer**。保留十余年产品管理经验作为理解用户、设计产品和推进交付的优势，并用具体工程作品支持这项定位。正文不暗示十余年软件工程经验，也不使用 Senior AI Engineer 等与事实库不符的职级。

本轮以内容更新和必要的展示调整为主：保留现有 Angular 技术栈、深色视觉风格、导航和页面地址；调整首页信息顺序、项目卡片与案例结构。完整视觉改版、技术栈迁移和 CMS 建设可以另立方案。

## 2. 已确认的内容差异

| 现有网站 | 新事实与建议处理 |
| --- | --- |
| 首页标题为 “More Than a Developer”，主要强调 PM 转型 | 明确显示 Applied AI + Full-Stack，并提前展示工程项目 |
| 首页技能大量并列图标，没有区分能力层级 | 按核心能力、项目实践、熟悉程度和课程接触重新选取 |
| Nuxt、PHP、Stitch 等出现在首页通用技能中 | 当前 Skills 未提供对应个人能力依据；移出本轮主技能区。现有项目中的历史描述另外核对 |
| About 将 Conestoga 写为 Student / 2024–Present | 改为已毕业，独立设置 Education；补充准确专业、High Distinction 和 GPA |
| 没有最近的软件开发工作经历 | 新增 2025 年 10–12 月的 Software Developer (Part-time) 经历，明确 React Native demo 的实现范围 |
| 首页精选为 LingoPick、SpeakingPass、Agent Yong | 改为 NovaAgent、Agent Yong、SpeakingPass；LingoPick 改为已停止运营的历史产品案例 |
| 缺少 NovaAgent 和 Fix My City | 新增两项团队案例及各自奖项，清楚标注五人团队与个人贡献 |
| Agent Yong 描述包含旧检索函数、Next.js 15、无幻觉及低延迟保证 | 按最新索引 + 单一 knowledgeReader 工具的实现重写；使用 Next.js 16 / React 19，移除无测量依据的保证 |
| 现有标书项目是 n8n 工作流；事实库记录 Tender Master 为 Python / LangGraph CLI | 单独准备 Tender Master 案例，先明确两者关系，不混用架构与截图 |
| 首页和 Contact 使用 jadxie2022@gmail.com | 统一为事实库中的 **jedxie2022@gmail.com** |
| grokani.love 出现在公开项目列表 | 按事实库默认公开展示规则，移出首页、默认项目列表和产品数量表述，保留源码记录 |

网站现有文字可帮助定位差异，但新增个人信息、技术能力、项目结果以 Resume Facts 为准。

## 3. 首页：先展示作品，再展开背景

建议首页顺序：**个人定位 → 精选项目 → 技术能力 → 简短背景与认可 → 联系方式**。

### 首屏英文文案草案

**标题**

> Applied AI & Full-Stack Developer

**介绍**

> I’m Yongjie Xie, a developer based in Waterloo, Canada. I build AI-powered applications and web products with TypeScript, React, and Python, bringing 10+ years of product-management experience to the problems I choose and the experiences I design.

**行动入口**

- `View Projects`：进入 Portfolio。
- `Contact Me`：进入 Contact。
- 保留现有 Agent Yong 导航入口，文案建议为 `Ask Agent Yong`，让访问者知道这是 AI 助手。

本轮不添加泛化简历下载按钮：事实库不是一份面向所有岗位的最终 PDF 简历。以后可以挂载单独审阅过的公开版本。

### 精选项目

保留三张精选卡片，明确排序为：

1. **NovaAgent**：展示完整 RAG、流式 API、多服务部署和开发领导力。
2. **Agent Yong**：展示独立 AI 应用、工具检索、对话 UI 和端到端实现。
3. **SpeakingPass**：展示独立全栈产品、关系数据建模、SEO 实现及真实用户指标。

建议卡片分别显示 `Team Capstone`、`Independent Product` 等范围标签，并提供一句功能描述和一项关键证据。首页可写 SpeakingPass 的 `1,150 MAU · Aug 2026`；NovaAgent 的奖项注明团队性质。

技术能力放在精选项目之后，减少访问者先滚过大量图标才能看到作品的距离。

## 4. About：补齐工程经历、毕业信息和奖项

将现有长篇转型故事压缩为三段：现在的开发方向、形成产品思维的经历、通过自学和正式教育实现转型的过程。

### 英文介绍草案

> I’m Yongjie Xie, a Waterloo-based developer focused on applied AI and full-stack web development. My work includes conversational agents, retrieval workflows, browser extensions, and content-driven web applications.
>
> Before moving into development, I spent more than a decade in product management, including roles at iQIYI, Wanda Pictures, and Polang Movies. That background shapes how I work: understand the user’s problem, make deliberate product decisions, and carry the work through to delivery.
>
> I began learning HTML, CSS, JavaScript, Node.js, and databases alongside my product work, then completed Conestoga College’s Mobile and Web Development diploma in 2026 with High Distinction and a GPA of 3.79/4.0. Alongside my coursework, I studied Python and AI agent development and applied that learning to independent products, client work, and team capstones.

### 页面结构

| 区块 | 计划内容 |
| --- | --- |
| Introduction | 上述三段，配合现有插画 |
| Engineering Experience | Software Developer (Part-time), Private Client, Remote, Oct–Dec 2025；产品规划、UI 设计和 React Native / Expo / TypeScript demo |
| Product Experience | 保留 Polang Movies、Wanda Pictures、iQIYI、WeTimes 的时间线，压缩描述并校准个人责任 |
| Education | Conestoga：Ontario College Diploma in Mobile and Web Development, 2024–2026；High Distinction；GPA 3.79/4.0。北京师范大学珠海分校：Bachelor of Arts in Advertising, 2008–2012 |
| Recognition | NovaAgent 的 1st Place — Mobile and Web Development Winter 2026 ACSIT Capstone Showcase；Fix My City 的 Best Final Year Project — Conestoga College 2026 Tech Showcase。均注明团队项目 |
| Availability | Waterloo, ON；对 Waterloo、Toronto 和 Remote 工作机会开放。可使用 “Currently authorized to work in Canada; no sponsorship required.” |

工作经历公开展示建议使用 `Private Client`，项目名使用 **Smart Message Relay**，不发布合同条款。项目仅实现 demo，不能写成已上线的完整短信转发应用。

旧产品管理成果保留各自公司和产品范围。例如 Polang 的完整平台是产品领导成果，个人编码范围为 HTML/CSS/JavaScript landing pages；WeTimes 是雇主，Gewara 和 Mobile QQ 是产品/平台。

## 5. 技能：围绕工程方向精选，并保留能力层级

首页展示少量主技能；About 可以展开 `Also worked with` 与 `Coursework`。避免熟练度百分比和所有技术同等精通的表达。

| 能力方向 | 推荐展示 | 展示依据与层级 |
| --- | --- | --- |
| Languages | TypeScript、JavaScript、Python | Facts 中的核心能力 |
| Frontend | React、Next.js、Tailwind CSS；React Router、TanStack Query | 核心能力，后两者对应 NovaAgent |
| Applied AI | LangChain、LangGraph、Vercel AI SDK；tool calling、file-based retrieval、vector RAG、structured generation | 项目实践；分别关联 Agent Yong、NovaAgent、Tender Master |
| Backend & Data | FastAPI、Hono、Supabase、Node.js；PostgreSQL | 框架和平台是项目实践；PostgreSQL 保持 working familiarity，不暗示数据库管理专家 |
| Deployment | Vercel、Cloudflare Workers、Railway | 实际项目部署，Railway 对应 NovaAgent Python RAG 服务 |
| Product & Collaboration | Figma、Git、Notion；product discovery、UI design、跨团队沟通 | 设计和项目/经历记录支持；不扩写未记录的协作结果 |

补充技能处理：

- Angular 保留为当前网站的实际项目经验，同时保持事实库的 Working Familiarity 层级。
- React Native 关联 Smart Message Relay demo；Pydantic 关联 Tender Master。
- WXT、IndexedDB、webext-bridge、Zustand 等优先在相关项目里展示。
- AWS EC2/Lambda/S3、Terraform、Render、Flutter、C#、MySQL、MongoDB 放到可选的课程接触区；不作为独立产品生产经验。
- Vue、Svelte、Sass 若展示，归入 familiarity。Nuxt、PHP、Stitch 和通用 n8n 能力不由当前 Facts 支持，本轮不放入主技能清单；这不等于断言你没有使用过它们。

## 6. Portfolio：项目优先级与逐项更新

| 项目 | 建议位置 | 更新重点 |
| --- | --- | --- |
| NovaAgent | 首页精选；Portfolio 优先 | 新案例：五人团队、Project Leader / Lead Full-Stack Contributor；agent dashboard、文档摄取、embeddings、向量检索、关键词规则和公共聊天页；团队一等奖 |
| Agent Yong | 首页精选 | 重写：Next.js 16 / React 19；知识索引 + knowledgeReader 按需读取 Markdown；流式聊天；独立实现。区分 file-based agentic RAG 与向量 RAG |
| SpeakingPass | 首页精选 | 重写：RSC / Server Actions、Supabase 关系模型、内容运营、metadata / sitemap、GA4 / AdSense 集成；**1,150 MAU, August 2026, Google Analytics** |
| Tender Master | AI 案例优先 | 新案例：独立客户交付；Python / LangGraph CLI；规划、写作、检查、反馈重试、Pydantic、Word 草稿输出；不虚构公开仓库或产品链接 |
| Fix My City | 主要团队案例 | 新案例：五人团队；个人贡献为 UI/UX、图像审核和 AI 分类/优先级流程；展示团队奖项。移动端与完整 dashboard 标注团队系统范围 |
| Transider | 主要独立产品 | 补充持续迭代、MV3 / WXT、side panel、typed messaging、local-first vocabulary、Excel 导出；**1,100+ MAU, August 2026, Chrome Web Store Developer Dashboard** |
| LingoPick | 历史产品案例 | 不再首页精选；明确 discontinued；突出在 Transider 基础上的 AI 翻译和 Gumroad premium membership；移除未经事实库支持的跨设备词库同步表述 |
| Smart Message Relay | 工作经历关联案例 / Design | 统一 SMS Forwarder 的对外名称；区分 Figma 设计和 React Native demo；记录 submitted to Google Play but not publicly launched |
| yongxie.dev / YongWork | Additional Projects | 统一称呼为个人作品集站；保留 Angular / Signals / responsive case studies；更正文档中不符合当前路由配置的 SSR 描述 |
| molibb.baby | Additional Projects | 展示 Next.js、Dexie / IndexedDB 本地数据及 AI-assisted 开发；如使用“一天交付”，写成候选人自述，不推导效率提升百分比 |
| horoscopechinois.today | Additional Projects | 保留法语内容站、Server Components / Server Actions、Supabase；可将内容生成工作流作为补充说明，避免重复占据主要 AI 项目位置 |
| Hu-Landscaping、Google Trends Tool 等 | 补充 / 历史作品 | 当前 Resume 未有对应完整事实记录。保留现有素材，本轮不扩写其技术和商业成果；后续补录后再提升展示优先级 |
| MonsterHunterRecorder / Top Hunter | Design | 统一展示命名关系，明确设计概念；没有实现或发布证据时不写成已交付 app |
| grokani.love | 不进入默认公开项目列表 | 遵循事实库既有默认规则；保留数据文件，不参与首页或产品数量表述 |

### 项目列表的展示调整

- 默认显示 `All`，按优先级排序；筛选建议为 `AI Applications`、`Web Products`、`Browser Extensions`、`Design`。
- AI 和 Web 等使用标签，允许同一项目具有多个属性；一个项目只保留一条记录。
- 卡片描述允许两行，增加项目范围、状态及少量技术标签。奖项和 MAU 只在相关项目上展示。
- 支持 `CLI` 平台标识，避免将 Tender Master 表现为 Web 应用。
- 首页精选采用明确的项目顺序，避免依赖列表顺序和当前服务的前三项截断逻辑。
- 继续保留现有项目 ID 和 `/detail/:id` 地址；新项目使用新的未占用 ID。

### Tender Master 与旧 n8n 项目的待审阅关系

事实库没有说明 Python/LangGraph 工具与现有 n8n Tender Document Generator 的版本关系。推荐当前先把 Tender Master 作为独立案例准备，旧 n8n 记录和图片保留，暂不进入主推列表。

若你确认它们是同一产品的重构版本，可更新原详情地址并在案例中说明演进；若是两项交付，应分别展示，分别使用自己的技术和成果。现有 `/projects/tendermaker/1.png` 是旧工作流图，不能直接充当 Python/LangGraph 实现图。

## 7. 详情页：从长篇宣传文案改为可核对的工程案例

主要案例统一为以下结构，具体内容密度按项目规模调整：

1. **Snapshot**：一句产品说明、时间、项目范围、状态、个人角色、链接。
2. **Problem & Audience**：目标用户、问题和产品约束。
3. **My Contribution**：个人亲手实现的部分；团队案例另写 Team System。
4. **Implementation**：核心数据流、技术栈、架构与关键决策。
5. **Outcomes**：具名项目的指标、奖项、发布或交付结果。
6. **Trade-offs & Current Status**：关键取舍、实现限制、历史状态和后续方向。

内部保留来源映射，不把 `claim_status` 等事实库管理字段塞进面向招聘者的页面。公开文字通过准确措辞、日期和个人/团队标注体现边界。

本轮重点修正文案：

| 不再沿用的现有表述 | 替换方向 |
| --- | --- |
| Agent Yong “hallucination-free”、极低延迟保证 | 说明索引引导的工具检索设计，不承诺每次必调用工具或保证正确率 |
| Agent Yong 用 getMyWorkExperience 等固定函数检索 | 改为当前单一 knowledgeReader 读取所选 Markdown 文档 |
| 标书系统 “100% compliance”、百万字并行、显著提高中标概率 | Tender Master 只陈述已记录的重试流程和 Word 草稿输出；旧 n8n 成果需自己的证据 |
| SpeakingPass 的即时索引、已达成优异 Core Web Vitals、n8n 自动运营成果 | 展示有记录的 metadata、构建期 sitemap、server-first 实现和内容运营；不沿用未核实的效果及 n8n 实现 |
| Fix My City 被城市采用或合作 | 使用团队获奖和已部署 prototype；目前记录的兴趣不等于采用、合同或伙伴关系 |
| 所有产品用户数相加；七个公开独立产品 | 分项目显示 MAU，保留 2026 年 8 月口径；不发布聚合用户数或默认公开产品总数 |

### 素材准备

现有素材目录没有 NovaAgent、Fix My City 或新版 Tender Master 的专用图片。实施时优先获取真实界面截图；Tender Master 可使用按事实记录绘制的流程图和去除客户信息的示例输出。截图不能获得时先使用项目名称与简明架构图，不伪造产品界面。

Agent Yong 更新图片与当前 UI 对齐，其余旧截图逐项核对。设计稿可以保留 Figma 入口，但不推导未检查的 screen count、design system 或 usability testing 成果。

## 8. 内容维护与实施安排

### 内容组织

推荐继续使用本地 TypeScript 内容，不引入运行时对私有 Resume 目录的依赖。

- 增加共享 profile 数据：姓名、定位、简介、联系方式、教育和奖项；首页、About、Contact、footer 统一引用。
- 技能数据记录 category、tier 和关联项目；页面按展示需要选取。
- 为项目补充范围、角色、状态、时间、标签、精选排序和默认可见性。
- 列表与详情共用项目基础信息，避免项目名称、简介和链接重复维护。迁移保持小步进行，不要求一次重写所有旧 HTML 内容。
- 在项目内部文档中维护来源映射和最近复核日期，只导出明确选定的公开字段。Resume 始终是事实来源；本轮不修改 Resume。

### 实施顺序与交付物

| 阶段 | 内容 | 可审阅结果 |
| --- | --- | --- |
| 1. 文案定稿 | 首页与 About 英文稿、技能清单、主要项目介绍、旧内容处理 | 逐页文案及项目清单，重点核对 Tender 项目关系与范围 |
| 2. 内容与展示落地 | 共享数据、页面更新、三张精选卡片、新案例、项目筛选、素材 | 本地网站预览，包含桌面和手机布局 |
| 3. 一致性与验证 | 联系方式、名称、链接、截图、指标日期、团队范围、构建、相关交互 | 可交付的网站改动及验证记录 |
| 可选后续：案例 SEO | 核对部署方式后，为公开静态详情采用预渲染并补齐动态 metadata、Open Graph 和 sitemap | 单独验证 HTML 是否含案例内容，避免沿用不符合实现的 SSR 宣称 |

基础页面 title 与 description 随本轮定位同步更新；详情页 SEO 的渲染改动需单独评估部署兼容性。当前 `detail/:id` 为 Client，其他路由为 Prerender，方案不把现状描述为案例页 SSR。

### 主要代码涉及范围

| 范围 | 现有 / 拟新增文件 |
| --- | --- |
| 首页 | `src/app/features/index/index.html`、`index.route.ts` |
| About / Contact | `src/app/features/about-me/*`、`src/app/features/contact/*` |
| 共享个人与技能数据 | 拟新增 `src/app/core/data/profile.data.ts`、`skills.data.ts` |
| 项目列表与详情组织 | `src/app/core/services/portfolioService.service.ts`、`projectContentService.service.ts`；`src/app/assets/projectContent/IProjectContent.ts` |
| 新案例 | 拟新增 `novaagent.data.ts`、`fixmycity.data.ts`、`tendermaster.data.ts`，旧 Tender 地址处理取决于关系确认 |
| 现有案例修订 | `agentyong.data.ts`、`SpeakingPass.data.ts`、`transider.data.ts`、`lingoPick.data.ts` 及次要案例 |
| 卡片、筛选与详情 UI | `src/app/shared/components/product-list-item/*`、`src/app/features/portfolio/*`、`src/app/features/detail/*` |
| 导航与身份信息 | `src/app/shared/components/nav-bar/*`、`footer/*`、`src/app/app.routes.ts`、`src/index.html` |
| 素材与来源文档 | `public/projects/`；拟新增 `docs/content-source-map.md` |

### 验收要点

- 首页、About、Contact 的姓名、定位和邮箱一致；学历不再显示在读。
- 主要项目都有明确个人贡献、项目范围、状态和有效的详情记录。
- 所有 MAU 保留所属项目、月份和来源，奖项保留正式名称与团队性质。
- 停止运营的 LingoPick 不作为当前生产产品；Smart Message Relay 不写成已上线应用。
- 网站与 Agent Yong 的入口、问题预填链接在实施时核对；本轮不自动修改另一个项目的知识库。
- 新增封面和截图路径正确；没有截图的项目不会留下空白轮播区。
- 原详情 ID 保持稳定；筛选、详情解析、外链与手机菜单可用。
- 完成生产构建和相关交互检查；若旧 App 测试仍断言欢迎标题，随实际改动修正，并明确区分旧问题与新增问题。
- 只展示公开选定字段，不发布事实库内部记录、学生号、住址、合同或客户材料。

## 9. 审阅时重点看这三项

1. **文案与姓名展示**：推荐使用上述英文定位和简介，个人姓名统一为 Yongjie Xie，域名及 YONGXIE.DEV 品牌保留。
2. **精选项目与页面顺序**：推荐 NovaAgent → Agent Yong → SpeakingPass；作品排在技能之前。
3. **Tender 项目关系**：需要确定 Python/LangGraph Tender Master 是原 n8n 项目的重构，还是另一项交付。这会影响详情地址和旧案例的处理，其余更新可以独立推进。

## 事实来源

- [Candidate：身份、经历、教育、奖项与产品范围](/Users/xieyongjie/Documents/Vault/Resume/Facts/Candidate.md)
- [Skills：能力层级与个人项目映射](/Users/xieyongjie/Documents/Vault/Resume/Facts/Skills.md)
- [Claim Registry：指标、归属与公开展示条件](</Users/xieyongjie/Documents/Vault/Resume/Facts/Claim Registry.md>)
- [Source Records：确认记录与技术来源](</Users/xieyongjie/Documents/Vault/Resume/Facts/Source Records.md>)
- [Agent Yong：最新文件检索架构](</Users/xieyongjie/Documents/Vault/Resume/Facts/Projects/Agent Yong.md>)
- [NovaAgent：团队角色、RAG 与部署](/Users/xieyongjie/Documents/Vault/Resume/Facts/Projects/NovaAgent.md)
- [SpeakingPass：实现与 2026 年 8 月 MAU](/Users/xieyongjie/Documents/Vault/Resume/Facts/Projects/SpeakingPass.md)
- [Transider：扩展实现与 2026 年 8 月 MAU](/Users/xieyongjie/Documents/Vault/Resume/Facts/Projects/Transider.md)
- [Tender Master：客户交付及 LangGraph 流程](</Users/xieyongjie/Documents/Vault/Resume/Facts/Projects/Tender Master.md>)
- [Fix My City：团队系统与个人贡献](</Users/xieyongjie/Documents/Vault/Resume/Facts/Projects/Fix My City.md>)
- [Other Projects：LingoPick 与其他独立项目状态](</Users/xieyongjie/Documents/Vault/Resume/Facts/Projects/Other Projects.md>)
- [Design Portfolio：设计稿与证据范围](</Users/xieyongjie/Documents/Vault/Resume/Facts/Design Portfolio.md>)
