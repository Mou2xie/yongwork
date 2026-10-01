# Yongwork — yongxie.dev

> **An Applied AI & Full-Stack Engineering Portfolio**
>
> *Showcasing not just "how I code", but "how I think".*

Yongwork is a data-driven personal portfolio that presents every project as a structured **product case study**: the problem it solves, the audience it serves, the decisions behind it, and — where relevant — what it explicitly does not do.

## 🚀 The Problem & Solution

**The Background:**
Developer portfolios usually suffer from the "gallery problem" — a wall of screenshots that shows *what* was built but never *why*. The trade-offs, constraints and user value are left for the reader to guess.

**The Solution:**
Treat each project as a structured case study, and let the data model enforce that narrative so no entry can omit its audience or its decisions.

- **For Recruiters:** immediate context on why a project exists and what the candidate personally did.
- **For Engineers:** the architecture, the trade-offs, and honest scope boundaries.
- **For Product Managers:** target audience, product decisions and outcome evidence, separated from team scope.

## ✨ Core Features

- **Structured case studies** — `detail/:id` renders role, timeline, scope, status and then the problem, audience, contribution, implementation and trade-offs.
- **Content as data** — catalog entries (`core/data/projectCatalog.data.ts`) own names, descriptions, covers, tags, ordering and visibility; case-study files own only narrative. The list and detail pages read one source, so they cannot disagree.
- **Tag filtering** — `All`, `AI Applications`, `Web Products`, `Browser Extensions`, `Client Delivery`, `Design`. A project with several tags still appears exactly once.
- **Explicit featured ordering** — the home row is ordered by `featuredOrder`, not by catalog array position.
- **Visibility rules** — records excluded by policy are filtered inside the service and cannot leak into lists, filters or featured selection.
- **Feature-based architecture** — folders grouped by domain rather than by file type.
- **Responsive design system** — Tailwind CSS 4 with CSS-first `@theme` theming.

## 🛠 Tech Stack

| Category | Technology | Notes |
| :--- | :--- | :--- |
| **Framework** | Angular 21 | Standalone components throughout; no NgModules. |
| **Reactivity** | Angular Signals | `signal` / `computed` drive portfolio filtering and the gallery index. |
| **Styling** | Tailwind CSS 4 | CSS-first configuration via `@theme` in `src/styles.css`. |
| **Rendering** | Angular SSR / Express | See the rendering note below. |
| **Language** | TypeScript 5.9 | Strict mode, including `strictTemplates`. |
| **Testing** | Vitest | `npm test`. |

## 📐 Rendering note (important)

Rendering is configured per route in `src/app/app.routes.server.ts`:

| Route | Mode | Consequence |
| :--- | :--- | :--- |
| `/`, `/portfolio`, `/about-me`, `/contact` | `Prerender` | Built to static HTML at build time. |
| `/detail/:id` | `Client` | The initial response is the application shell; the case study renders in the browser. |

So case-study HTML is **not** in the initial server response, and a direct request to a detail URL returns the app shell rather than the article. Earlier documentation in this repository claimed all case studies were SSR-rendered and immediately indexable; that was inaccurate and has been corrected. Moving public case studies to prerendering with per-project metadata is a known follow-up, gated on confirming the deployment model.

## 📦 How to Run

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development server

```bash
npm start          # http://localhost:4200
```

### Tests and build

```bash
npm test                 # Vitest, non-interactive: npx ng test --watch=false
npm run build            # production build to dist/
npm run serve:ssr:yongwork   # serve the SSR build (requires npm run build first)
```

## 🗂 Project Structure

```
src/app/
├── core/
│   ├── data/       # projectCatalog, profile, skills  (the single source of truth)
│   ├── models/     # shared types
│   └── services/   # portfolioService, projectContentService
├── features/       # index, portfolio, about-me, contact, detail
├── layouts/        # main-layout (nav + footer chrome)
├── shared/         # nav-bar, footer, title, content-section, question, product-list-item
└── assets/projectContent/   # case-study narrative bodies, one file per project
public/
├── projects/<slug>/   # cover + gallery images
├── design/            # design-artifact covers
├── icons/             # technology logos
└── images/            # site illustrations and icons
```

## ✍️ Adding or Editing a Project

1. **Catalog entry** — add or edit a `ProjectSummary` in `src/app/core/data/projectCatalog.data.ts`. This owns the public name, description, cover, platforms, tags, `kind`, `status`, `featuredOrder` and `visibility`.
2. **Case study** — add a matching `<project>.data.ts` under `src/app/assets/projectContent/` with the narrative `content` and any links/images.
3. **Register** — add the import to `ProjectContentService`. The catalog drives listing; the content service drives `/detail/:id`.
4. **Assets** — place images under `public/projects/<slug>/`. Reference them as `/projects/<slug>/name.png`.
5. **Keep the id stable.** Existing ids are load-bearing: `/detail/:id` URLs are public.

Ids are grouped by domain — `1–8` web products, `9` team capstone, `300+` AI and automation, `500+` design artifacts — and must remain unique.

## 💡 Engineering Notes

### "PM thinking" enforced by types

The case-study interface requires a role, timeline, team size and status alongside the narrative, so the structure itself pushes each entry toward product reasoning rather than a feature list.

### Signals over manual subscriptions

`Portfolio` derives its list from a `computed` over the selected tag, and `Detail` tracks the gallery index in a `signal`. Updates touch only the DOM that depends on them.

### Accessibility

Project cards are real links (`<a>`), so they are keyboard operable, middle-clickable and crawlable. Filter controls are `<button>`s with `aria-pressed`; icon-only links carry `aria-label`; decorative images use `alt=""`.

### Honest claims

Content avoids the failure mode of portfolio copy: no guarantee language, no unmeasured performance claims, and team awards are labelled as team awards. Where a project has a limitation, the case study states it.

---

*Built by Yongjie Xie.*
