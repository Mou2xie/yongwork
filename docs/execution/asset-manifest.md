# Asset Manifest

版本：2026-09-30 · T07 交付物

登记每个被引用的 cover / gallery 素材：来源、用途、尺寸、是否为真实截图。

## 1. 新增素材

| 文件 | 用途 | 来源 | 尺寸 | 真实截图？ |
| --- | --- | --- | :--- | :--- |
| `public/projects/novaagent/cover.png` | NovaAgent 卡片封面 | 2026-09-30 抓取 `https://www.novaagent.me/` 首屏 | 500×350 | 是（真实产品界面） |
| `public/projects/fixmycity/cover.png` | Fix My City 卡片封面 | 2026-09-30 抓取 `https://fixmycity-welcome.vercel.app/` 首屏 | 500×350 | 是（真实产品落地页） |
| `public/projects/fixmycity/1.png` | Fix My City 详情 gallery | 2026-09-30 抓取 `https://fixmycityadmindashboard.vercel.app` | 500×350 | 是（真实管理后台界面，视觉元素极少） |
| `public/projects/tendermaster/cover.png` | Tender Master 卡片封面 | 按站点设计语言程序化生成 | 500×350 | **否 — 占位封面** |

### 尺寸说明

既有封面统一为 500×350（5:3）。新增截图原始尺寸为 1440×900，按「保留顶部导航与首屏」的策略裁剪后缩放到 500×350，与既有卡片裁切习惯一致。

## 2. Tender Master 封面说明（重要）

Tender Master 是 **CLI 工具**，没有可供截图的用户界面，事实库中也没有任何界面素材。执行计划 T07 第 3、4 条要求：缺少界面时使用事实支持的项目名称或架构封面，且**不得伪造产品界面**，也不得使用旧 n8n 工作流图充当其实现截图。

因此该封面为程序化生成的占位图，明确标注 `No UI captured — CLI delivery`，使用站点既有色值（背景 `#212121`、强调色 `#3EF050`、高亮文字 `#DEDEDE`）与字体风格。它**不表现**任何产品界面。

**待办：** 若后续提供该工具的真实终端输出或流程截图，应替换此文件并更新本清单。

## 3. 被替换或修正的引用

| 项目 | 处理 |
| --- | --- |
| NovaAgent | `image` 设置为 `[]`。此前写入的 `/projects/novaagent/1.png` 不存在；仅捕获到首屏，无法构成 gallery。详情页在 0 图时不渲染轮播容器。 |
| Fix My City | `image` 使用 admin dashboard 截图 1 张。详情页在单图时不渲染切换控件。 |
| 旧 n8n Tender（id 300） | 保留原 `public/projects/tendermaker/1.png` 供其自身使用，**不**被 Tender Master 复用。 |
| 既有 Web 项目封面与 gallery | 未改动，全部路径校验存在。 |

## 4. 校验结果

对全部 `src/app/assets/projectContent/*.data.ts` 中引用的路径做存在性校验：

```
MISSING: none
```

同时校验 `projectCatalog.data.ts` 中 18 条记录的全部 `cover` 路径：全部存在。

## 5. 未获取的素材（缺口）

| 项目 | 缺口 | 原因 |
| --- | --- | --- |
| NovaAgent | 无 gallery 截图 | 需要登录后的 dashboard 界面；本轮仅公开首屏可访问 |
| Tender Master | 无真实界面截图 | CLI 工具，且可能涉及客户保密信息 |
| Agent Yong | 现有 gallery 为旧版界面 | 与当前实现不一定一致；本轮未重新抓取，未删除旧素材 |
| Fix My City | 移动端界面截图缺失 | 需要模拟器或真机；本轮不引入该工具链 |

缺口不影响内容交付：详情页在无图时不渲染空轮播区，卡片封面均有效。

## 6. 素材使用边界

- 所有截图均来自公开可访问的产品站点，不含客户机密信息。
- 截图未包含个人信息、凭据或后台数据。
- 未伪造任何产品界面、用户数或评价。
- 未在截图上添加未经验证的标注（如奖项徽章、指标数字）。

## 7. Detail review assets — 2026-10-01

This addendum supersedes the NovaAgent, Agent Yong and Fix My City gallery gaps above. Existing source assets remain intact.

| Asset | Source / purpose | Delivered dimensions |
| --- | --- | --- |
| `public/projects/novaagent/1.png` | Public `https://www.novaagent.me/` landing-page capture | 1440×806 |
| `public/projects/novaagent/2.png` | Public Nova Assistant conversation page, reached through the landing page; no conversation submitted | 1440×806 |
| `public/projects/agentyong/current-home.png` | Public `https://www.agentyong.chat/` desktop entry screen | 1440×806 |
| `public/projects/agentyong/current-mobile.png` | Same public application at a mobile viewport | 390×844 |
| `public/projects/fixmycity/mobile-1.png` | Local `fixmycity_welcome/fixmycity_welcome/src/assets/1.png`, also displayed on the public landing page; resident home | 640×1428 |
| `public/projects/fixmycity/mobile-2.png` | Same local asset directory, `2.png`; reporting wizard category step | 640×1428 |
| `public/projects/fixmycity/mobile-3.png` | Same local asset directory, `3.png`; report details and status timeline | 640×1428 |
| `public/projects/yongwork/current-home.png` | Updated local portfolio preview, homepage | 1440×1000 |
| `public/projects/yongwork/current-portfolio.png` | Updated local portfolio preview, catalog | 1440×1000 |
| `public/projects/yongwork/current-detail.png` | Updated local portfolio preview, NovaAgent case-study layout | 1440×1000 |

All additions depict actual interfaces. Large source captures were resampled proportionally for delivery. Fix My City images depict the team-built prototype and are captioned accordingly; the report location shown is part of the existing public demo screenshot.

The previous `fixmycity/1.png` is an admin **login screen**, not an authenticated operations dashboard. It remains on disk but is no longer in the revised gallery. No authentication was bypassed and no private dashboard content was captured.

Transider's revised gallery retains `2.png` and `3.png`, the historical Chrome Web Store graphics containing its side-panel and notebook UI. Captions explicitly identify them as graphics. SpeakingPass, LingoPick, molibb and horoscope retain existing source screenshots, with descriptive captions; LingoPick is labeled historical/discontinued.

Agent Yong's older `1.png` / `2.png` and the portfolio's older numbered assets remain on disk for provenance; new captures are referenced by the detail galleries. Tender Master remains a CLI record with no gallery. Older projects outside this review retain their assets and gallery references.
