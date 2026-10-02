# AGENTS.md

Data-driven Angular portfolio for yongxie.dev. Each project is a structured case study.

## Commands

- `npm install`
- `npm start` — dev server at http://localhost:4200
- `npm run build` — production build to `dist/`
- `npx ng test --watch=false` — run the suite once. `npm test` is `ng test`, which opens **watch mode in a TTY**, so scripts/CI must pass `--watch=false`.
- `npx ng test --watch=false --filter='^PortfolioService'` — single suite; `--filter` is a regex matched against describe/it names (`--include` also works for file paths).
- `npx tsc -p tsconfig.app.json --noEmit` — typecheck. There is **no lint or format script**; Prettier options live inline in `package.json`.
- `npm run build && npm run serve:ssr:yongwork` — preview the SSR build (`PORT` env, default 4000).

## Architecture

- Angular 21, standalone components only, signals/computed, Tailwind CSS 4 with CSS-first `@theme` tokens in `src/styles.css` (`--color-bg`, `--color-accent`, `--font-anton`, …). `strict` + `strictTemplates` are on.
- Two sources of truth for projects — do not duplicate facts between them:
  - `src/app/core/data/projectCatalog.data.ts` — listing metadata (name, description, cover, tags, `featured`/`featuredOrder`, `visibility`, `url`, `kind`, `status`). Drives lists, filters and featured selection through `PortfolioService`.
  - `src/app/assets/projectContent/*.data.ts` (`IProjectContent`) — narrative `content` only. Drives `/detail/:id` through `ProjectContentService`.
- Adding a project needs **all four**: catalog entry, a `<project>.data.ts` content file, an import added to `ProjectContentService`, and assets under `public/projects/<slug>/`. Missing the content file leaves the catalog-visible card pointing at a broken detail page.
- Project ids are public URL segments (`/detail/:id`) and load-bearing — **never renumber re-published ids**. `visibility: false` (currently grokani, id 5) hides a record from every list/filter/featured query but `getProjectContent` still resolves it so old links don't 404. Ids 500–505 are design artifacts with a Figma `url` and no detail page.
- Routes live in `src/app/app.routes.ts` as children of `MainLayout`; the detail route resolves content via `src/app/features/detail/project.resolver.ts`.

## Rendering gotcha

`src/app/app.routes.server.ts` sets render mode **per route**: everything is prerendered except `detail/:id`, which is `RenderMode.Client`. So case-study HTML is **not** in the initial server response and a direct detail URL returns the app shell. `GEMINI.md`/older docs claim SSR for case studies — that is wrong for detail pages.

## Content rules (hard constraints)

- Case-study `content` is locally authored HTML rendered via `[innerHTML]`. Never add `bypassSecurityTrustHtml`.
- Copy facts are governed by `docs/execution/implementation-contract.md` §5 and `docs/content-source-map.md`: no guarantee language, no aggregated user counts (MAU is per project and month), team awards must be labelled as team scope, and unverified metrics are removed. Preserve these when editing case studies.

## Notes

- `GEMINI.md` is gitignored and less accurate than this file. `docs/execution/` (implementation contract, decision log, validation) is the authoritative record for content and scope decisions.
- Test files are colocated `*.spec.ts` and rely on Vitest globals (no `describe`/`it` imports); they run in Node with jsdom.
