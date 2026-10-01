# Content Source Map

内部文档 · 2026-09-30 · **不渲染到网页**

每一条公开发布的内容声明 → 事实库来源 → 使用边界。
事实库路径均相对 `/Users/xieyongjie/Documents/Vault/Resume/`。本轮只读，未修改事实库。

## 1. 身份与联系方式

| 网站内容 | 来源 | 边界 |
| --- | --- | --- |
| 姓名 `Yongjie Xie` | `Facts/Candidate.md` L21 | 公开姓名统一为 Yongjie Xie；品牌 `YONGXIE.DEV` 保留 |
| 定位 `Applied AI & Full-Stack Developer` | `docs/website-content-update-plan.md` §3；`Facts/Candidate.md` L32 `target_roles` | 不写成 Senior AI Engineer |
| 邮箱 `jedxie2022@gmail.com` | `Facts/Candidate.md` L24 | 修正原站点的 `jadxie2022` 拼写错误 |
| 电话 `+1 382 889 3727` | `Facts/Candidate.md` L23 | 事实库格式为 `+1 (382)-889-3727`，站点使用等价写法 |
| 地点 `Waterloo, ON, Canada` | `Facts/Candidate.md` L22；`Claim Registry` `identity.location` | Toronto 是目标工作地点，不是第二居住地 |
| `Open to Waterloo, Toronto and Remote` | `Facts/Candidate.md` L34 `open_to` | 不推断搬迁意愿 |
| `Authorized to work in Canada; no sponsorship required` | `Facts/Candidate.md` L29；`Claim Registry` `identity.work-auth` | 不写「无限期授权」；不展示具体到期日（除非相关） |
| 语言 `English (Professional Working) · Mandarin (Native)` | `Facts/Candidate.md` L30；`Claim Registry` `identity.languages` | status 为 reported |
| 简介 `10+ years of product-management experience` | `Facts/Candidate.md` Experience 段（2012–2024） | 不暗示十余年软件工程经验 |

## 2. 工作经历

| 网站内容 | 来源 | 边界 |
| --- | --- | --- |
| Software Developer (Part-time), Private Client, Oct–Dec 2025 | `Facts/Candidate.md` L115–129；`Claim Registry` `employment.smart-message-relay` | 合同职称为 Software Development Engineer，对外用简洁职称；**不披露报酬与合同条款** |
| Smart Message Relay：产品规划、UI 设计、React Native demo | `Claim Registry` `employment.smart-message-relay-scope` | demo 含转发仪表盘、消息日志、拦截名单；不写成完整生产实现 |
| `submitted to Google Play and was not publicly launched` | `Claim Registry` `employment.smart-message-relay-release` | 禁用 launched / published / released / live |
| Polang Movies 30,000+ users · 100+ screening events | `Facts/Candidate.md` L133；`Claim Registry` `polang.scale` | 产品领导成果；个人编码范围为 HTML/CSS/JS 落地页 |
| Wanda 150,000+ DAU · 20%→30% · 52% conversion | `Facts/Candidate.md` L141；`Claim Registry` `wanda.scale` | 保留原公司与范围，不新增定义 |
| iQIYI iPad AURA 2.0 | `Facts/Candidate.md` L149 | 内容发现与离线观看 |
| WeTimes：Mobile QQ 300,000+ DAU · 900,000+ 折扣卡 | `Facts/Candidate.md` L157；`Claim Registry` `wetimes.scale` | WeTimes 是雇主；Gewara 与 Mobile QQ 是产品/平台名，不放进雇主标题 |

## 3. 教育

| 网站内容 | 来源 | 边界 |
| --- | --- | --- |
| Conestoga College, Ontario College Diploma in Mobile and Web Development, 2024–2026 | `Claim Registry` `education.conestoga` | 2026-04-25 完成；简历显示可保持 2024–2026 |
| High Distinction · GPA 3.79 / 4.0 | `Claim Registry` `education.conestoga-honour` | 两个都保留；不换算替代 GPA；不重复显示 90.26 加权平均 |
| Beijing Normal University, Zhuhai — Bachelor of Arts in Advertising, 2008–2012 | `Claim Registry` `education.undergraduate` | Department of Communication |

## 4. 奖项

| 网站内容 | 来源 | 边界 |
| --- | --- | --- |
| 1st Place — Mobile and Web Development Winter 2026 ACSIT Capstone Showcase（NovaAgent） | `Facts/Candidate.md` L188–194 | `scope: team`，必须注明团队性质 |
| Best Final Year Project — Conestoga College 2026 Tech Showcase（Fix My City） | `Facts/Candidate.md` L180–186 | `scope: team`，必须注明团队性质 |

## 5. 项目事实与量化

| 网站内容 | 来源 | 边界 |
| --- | --- | --- |
| NovaAgent：5 人团队、开发领导、dashboard、RAG ingestion、embeddings、PostgreSQL 检索、streaming Hono API、Railway 部署、团队一等奖 | `Facts/Projects/NovaAgent.md` | 团队项目，非独立产品；Flutter/团队组件不归属个人；Railway 仅指 Python RAG/embedding 服务，不与其他托管混淆 |
| Agent Yong：索引引导、单一 `knowledgeReader`、按需读取 Markdown、Next.js 16 / React 19、OpenRouter | `Facts/Projects/Agent Yong.md` | **禁用** `hallucination-free`、低延迟保证、旧六工具固定函数描述；明确无 embeddings / 向量检索 |
| SpeakingPass `1,150 MAU · Aug 2026` | `Facts/Projects/SpeakingPass.md` L34–40, L332–352 | 来源 Google Analytics；**禁止与其他产品 MAU 相加** |
| SpeakingPass：RSC、Server Actions、三表关系模型、dynamic metadata、build-time sitemap、GA4、AdSense | 同上 | **不写**「即时索引」「已达成优异 Core Web Vitals」「virtually zero client-side JavaScript」；不把 Zustand 写成已实现 store |
| Transider `1,100+ MAU · Aug 2026` | `Facts/Projects/Transider.md` L28–34, L135–138 | 来源 Chrome Web Store Developer Dashboard |
| Transider：MV3 / WXT、side panel、typed messaging、local-first、Supabase 字典、xlsx 导出 | 同上 | 文档化的 Supabase 用途是**字典数据**；个人词库为本地存储，**不得写成词库云同步**；Tailwind 不在该项目栈内 |
| Tender Master：Python ≥3.11、uv、LangGraph `@task`/`@entrypoint`、langchain-openrouter、Pydantic v2、python-docx | `Facts/Projects/Tender Master.md`；`Source Records` `candidate.tender-stack` | 独立客户交付，非七产品库存之一；**不写**合规保证、分钟级交付、中标率提升、并行生成（未实现）；retry 耗尽后的终止行为未记录，不推断 |
| Fix My City：5 人团队、产品与 UI/UX 设计、Express + OpenAI Vision 图片审核、Deno Edge Function `categorize-issue` + GPT-4o-mini 分类与优先级 | `Facts/Projects/Fix My City.md` | Flutter 客户端与 dashboard 属团队范围，**不声称个人 Flutter 实现**；未实现团队负责人角色；Cambridge 兴趣是 reported，**不是采用/合同/合作**；48 小时 SLA 是项目设置 |
| LingoPick：discontinued、Gumroad 会员、AI 翻译、WXT/React 19 | `Facts/Projects/Other Projects.md` L149–190 | 不推断营收、订阅计费机制或付费用户数；不写跨设备词库同步 |
| molibb.baby：Next.js、Dexie/IndexedDB、AI-assisted、一天交付 | `Facts/Projects/Other Projects.md` L193–197 | 「一天」为候选人自述交付周期，不是效率对比 |
| yongxie.dev：Angular 21、Signals、Tailwind v4、SSR/hydration、Vitest 已配置 | `Facts/Projects/Other Projects.md` L205–230 | 渲染描述必须与 `app.routes.server.ts` 一致（detail 为 Client）；测试工具存在 ≠ 覆盖率 |
| horoscopechinois.today：Next.js、RSC、Server Actions、Supabase | `Facts/Projects/Other Projects.md` L259–280 | French 内容站；Zustand/Chart.js 属 roadmap，不作为已实现 |
| grokani.love | `Claim Registry` `profile.independent-products`；`Other Projects.md` L198 | **默认排除**于公开列表、摘要与产品数量；保留源文件 |

## 6. 未发布的内容（明确排除）

- 聚合用户数 / 合并 MAU / 「七个独立产品」数量 — `Claim Registry` `profile.audience-boundary`，`Candidate.md` L102。
- GitHub 仓库数量（32/43）— `identity.github-count`，且规定不得用于投递简历。
- 学生号、家庭住址、签名、成绩单原件、合同条款、客户名称 — `Conestoga Coursework.md` Usage Boundaries。
- `claim_status`、`evidence_file` 等事实库内部字段。
- grokani.love 的 SEO 排名与广告收入主张。

## 7. 复核记录

- 事实库读取日期：2026-09-30。事实库 `last_updated`：2026-09-29。
- 复核人：协调 agent（本轮）。
- 本站正文语言：英文；事实库引用与边界说明：中文。
- 若事实库后续更新，以最新明确确认的记录为准，并更新本文件。
