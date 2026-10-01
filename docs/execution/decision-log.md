# 决策记录

格式：每条决策记录日期、决策、依据、影响范围、是否可回退。

---

## D-01：Tender 项目关系 —— 已解决

- **日期：** 2026-09-30
- **原状态：** 待定（执行计划 §3）。需要确定 Python/LangGraph 的 `Tender Master` 与网站现有 `/detail/300` 的 n8n Tender Document Generator 是同一产品的重构，还是两项不同交付。
- **决策：** **判定为两项不同交付。** 保留旧 n8n 记录（ID 300），Tender Master 使用新 ID 305，两者分别维护各自的技术与素材，不合并架构、不共用截图。
- **依据（来自事实库与现有代码的客观差异）：**

  | 维度 | 网站现有 ID 300（n8n） | 事实库 Tender Master |
  | --- | --- | --- |
  | 技术栈 | n8n 工作流节点、Switch/Code node、SMTP | Python ≥3.11、uv、LangGraph `@task`/`@entrypoint` |
  | 编排 | 并行 AI 线程、Outline Generation 模块 | planner / writer / quality-checker + 反馈重试环 |
  | 模型 | Claude-3.5、GPT-4o、Gemini-2.5-Flash | OpenRouter（`langchain-openrouter`，多别名可配） |
  | 输出 | HTML + SMTP 邮件投递 | Pydantic 契约 + python-docx `.docx` 草稿 |
  | 时间 | 无记录 | Mar 2026 |
  | 形态 | Web 工作流 | CLI |

- **关键证据：** `Facts/Source Records.md` 的 `candidate.tender-stack`（第 139–144 行）直接确认 Tender Master 的技术栈，并明确「A GitHub README was not supplied or retrieved for Tender Master」。事实库**从未提及** n8n Tender Document Generator，也未建立两者关系。
- **处理：**
  1. 新增 `tendermaster.data.ts`，ID **305**，`platform: CLI`，状态为客户端交付。
  2. 旧 ID 300 保留可访问地址与素材，降级为补充记录，不再进入主推列表。
  3. 修订旧 ID 300 中无依据的效果性表述（「100% compliance」「million-word scale」「significantly increasing the probability of winning」「Token Usage ROI」），保留可核对的工作流描述。
  4. 不把 `/projects/tendermaker/1.png`（旧工作流图）用作 Tender Master 的实现截图。
- **可回退：** 是。若用户后续确认两者实为同一产品的重构，只需把 ID 300 的详情内容替换为 Tender Master 架构并删除 ID 305，其余内容不受影响。

---

## D-02：旧 n8n 项目在本轮的展示优先级

- **日期：** 2026-09-30
- **决策：** 旧 n8n 项目（300/301/302）保留记录与详情地址，但**不进入首页精选**，也不预设为 AI 方向的主要成果。`Agent Yong`、`NovaAgent`、`Tender Master`、`Fix My City` 优先。
- **依据：** 执行计划 §4.4 初始展示规则；事实库未为旧 n8n 工作流记录可核对的商业成果。
- **可回退：** 是。

---

## D-03：grokani.love 的公开处理

- **日期：** 2026-09-30
- **决策：** 从首页精选、默认项目列表与产品数量表述中**排除**；保留 `grokani.data.ts` 源文件与既有素材，不删除。
- **依据：** `Facts/Claim Registry.md` `profile.independent-products` 与 `Other Projects.md`：默认从简历、公开作品集摘要和公开产品数量表述中排除，除非候选人针对具体申请明确批准。
- **可回退：** 是（需用户明确批准后恢复展示）。

---

## D-04：项目 ID 分配

- **日期：** 2026-09-30
- **决策：** 沿用现有 ID，新项目使用未占用 ID。

  | ID | 项目 | 处理 |
  | --- | --- | --- |
  | 1–8 | LingoPick、SpeakingPass、Transider、horoscopechinois、grokani、molibb、yongwork、Hu-Landscaping | 保留 ID |
  | 300–303 | n8n Tender、Fortune、Trends、Agent Yong | 保留 ID；300 按 D-01 处理 |
  | 500–505 | 设计稿入口 | 保留 ID 与 Figma 外链，标注为 design artifact |
  | **9** | **Fix My City**（新） | 团队案例 |
  | **304** | **NovaAgent**（新） | 团队案例 |
  | **305** | **Tender Master**（新） | 独立客户交付，CLI |

- **依据：** 执行计划 §4.1 候选预留 ID；执行时已检查目录，9、304、305 均未占用。
- **可回退：** 是，但会破坏已发布地址，需谨慎。

---

## D-05：不新增独立详情页的项目

- **日期：** 2026-09-30
- **决策：** Smart Message Relay 本轮只通过工作经历（About）与既有设计稿入口 501 呈现，不新建独立详情页。
- **依据：** 执行计划 §4.1。该项目为 submitted-but-not-launched 的 demo，单独详情页会放大其完成度。
- **可回退：** 是。
