# Detail Content Review

Review date: 2026-10-01 (America/Toronto)

## Scope and sources

Reviewed all 15 records resolved by `ProjectContentService`. Revised the 10 public case studies documented in the Resume facts library. The source library was read only; project IDs, catalog metadata, visibility and external destinations were preserved.

Sources are relative to `/Users/xieyongjie/Documents/Vault/Resume/`. Project-local contribution boundaries and `Facts/Claim Registry.md` govern the wording. `Facts/Design Portfolio.md` supplies design-role context. Current portfolio code governs this site's rendering and gallery behavior.

| Revised case study | Fact source | Product story emphasized |
| --- | --- | --- |
| NovaAgent (304) | `Facts/Projects/NovaAgent.md` | Origin in Agent Yong, user-demand research, creator workflow, configuration, knowledge ingestion, sharing and five-person delivery leadership |
| Agent Yong (303) | `Facts/Projects/Agent Yong.md` | Different visitor needs, conversation onboarding, reviewable knowledge and file-based agentic retrieval |
| SpeakingPass (2) | `Facts/Projects/SpeakingPass.md` | Personal IELTS preparation, seasonal discovery, practice content, editorial operations, SEO and independent ownership |
| Transider (3) | `Facts/Projects/Transider.md` | Personal English-learning need, contextual capture, reading side panel, notebook and portable local vocabulary |
| Fix My City (9) | `Facts/Projects/Fix My City.md` | Two-sided civic workflow, resident feedback, staff triage, product/UI design and personal AI contributions within team scope |
| Tender Master (305) | `Facts/Projects/Tender Master.md` | Client writing constraints, internal-user scope, planning/checking/revision and editable Word handoff |
| LingoPick (1) | `Facts/Projects/Other Projects.md`, LingoPick | Extension of Transider, AI translation, review, Gumroad membership and the discontinued product experiment |
| molibb.baby (6) | `Facts/Projects/Other Projects.md`, molibb | A friend's Cross Gate account-management need, focused delivery and local account/character hierarchy |
| horoscopechinois.today (4) | `Facts/Projects/Other Projects.md`, horoscopechinois | French-language audience, zodiac discovery, daily content and publishing operations |
| yongxie.dev (7) | `Facts/Projects/Other Projects.md`, personal website; local code | Presenting product and engineering evidence through discovery, case studies and visual artifacts |

The local `gameAccountManager/gam/README.md` was also read to check existing account hierarchy, tags and character fields. Its privacy/performance guarantees and roadmap were not promoted into shipped claims.

## Editorial changes

- Main cases use background/problem/audience, solution/features, product decisions, personal contribution, implementation, outcomes and trade-offs. Smaller cases combine outcome and trade-offs.
- Removed unsupported wording about always-current exam materials, deterministic AI output, achieved web-performance results, guaranteed privacy, and types enforcing editorial sections.
- Kept SpeakingPass's 1,150 MAU and Transider's 1,100+ MAU separate, each with its August 2026 window and source.
- Team recognition is expressed as recognition of the five-person team. Fix My City's mobile/dashboard implementation remains team scope.
- Agent Yong uses indexed Markdown retrieval; NovaAgent uses embeddings and PostgreSQL vector retrieval.
- Roadmap features are distinguished from implementation. LingoPick remains discontinued. Tender Master produces a draft for human review and has no invented UI.

## Records left for manual editing

Hu-Landscaping (8), n8n Tender Document Generator (300), n8n Fortune Generator (301) and n8n Google Trends Keywords Tool (302) have no corresponding standalone project record in the Resume facts library. Their content and assets were left unchanged as requested. The horoscope site's documented publishing workflow does not authorize rewriting the separate older n8n record.

grokani.love (5) remains unchanged and hidden under the existing default-exclusion decision. Design artifacts (500–505) continue linking to Figma and have no detail pages.

## Screenshot delivery

Nine revised projects with user interfaces have galleries. NovaAgent and Agent Yong use current public UI captures. Fix My City uses three genuine mobile screenshots from the local welcome-site assets. yongxie.dev uses the local updated preview. Existing SpeakingPass, LingoPick, molibb and horoscope galleries remain; Transider uses the existing store graphics that show its lookup and notebook interfaces, explicitly labeled as historical graphics.

The gallery adds descriptive alt text, an active caption and a full-size link. Captions are keyed by image path to remain stable when images are reordered. Previous/next controls remain visible on light screenshots. Inactive slides are hidden from the accessibility tree. Projects with no gallery still omit it; one-image galleries still omit switching controls. Existing user changes removing status and the top scope note were preserved.

NovaAgent's creator dashboard and Fix My City's admin operations screen require authentication; neither is presented as captured. The previous Fix My City `1.png` shows a login form, so the new gallery prioritizes actual mobile workflows. Tender Master remains a CLI case with no UI gallery.

Asset provenance and dimensions are recorded in [asset-manifest.md](asset-manifest.md#7-detail-review-assets--2026-10-01).

## Validation

- App TypeScript check passed.
- Existing Vitest suite passed: 2 files, 8 tests.
- Production build passed and prerendered 4 static routes. The sandboxed build aborted; the same build completed outside the sandbox.
- Static inspection resolved all 15 content records, checked referenced gallery paths, verified captions for all revised UI cases, and checked narrative HTML for paragraph/list nesting. No missing assets or invalid nesting were found.
- Browser checks passed for all 10 revised routes at 1440×1000 desktop and 390×844 mobile viewports: every gallery image loaded, no horizontal overflow, and next-image navigation updated both captions and full-size links.
- Tender Master's zero-image state omitted the gallery. The unchanged n8n Tender single-image case used the caption fallback and omitted switching controls. An unknown ID displayed the not-found state and portfolio link.
- `git diff --check` passed. A targeted diff confirmed the four manual-edit records, grokani and the catalog stayed unchanged.
