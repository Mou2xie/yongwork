import type { IProjectContent } from './IProjectContent';

/**
 * Rendering note for this case study.
 *
 * The site's README previously claimed project case studies were SSR-rendered
 * and immediately indexed. The actual configuration in `app.routes.server.ts`
 * marks `detail/:id` as `RenderMode.Client`, so case-study HTML is NOT in the
 * initial response. The static pages (`/`, `/portfolio`, `/about-me`,
 * `/contact`) are prerendered at build time. The copy below reflects the real
 * behaviour.
 */
export const yongwork: IProjectContent = {
    id: 7,
    projectName: 'yongxie.dev',
    description: 'This portfolio site: a data-driven case-study platform built with Angular',
    role: 'Creator · Product Manager · Engineer',
    status: 'Live',
    teamSize: 1,
    scopeNote: 'Independently designed, built and maintained. This is the site you are reading.',
    links: [
        {
            channel: 'figma',
            url: 'https://www.figma.com/design/HKqAEOWLkDBUUjbmydAaoP/personal-website?node-id=0-1&t=dDIbl9aanqqBtvbf-1',
        },
        { channel: 'github', url: 'https://github.com/Mou2xie/yongwork' },
        { channel: 'website', url: 'https://yongxie.dev/' },
    ],
    image: [
        '/projects/yongwork/current-home.png',
        '/projects/yongwork/current-portfolio.png',
        '/projects/yongwork/current-detail.png',
    ],
    imageCaptions: {
        '/projects/yongwork/current-home.png': 'yongxie.dev — homepage and featured projects, captured from the October 2026 local preview.',
        '/projects/yongwork/current-portfolio.png': 'yongxie.dev — portfolio catalog and filters, captured from the October 2026 local preview.',
        '/projects/yongwork/current-detail.png': 'yongxie.dev — case-study layout and screenshot gallery, captured from the October 2026 local preview.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>I needed a portfolio that could explain both my product-management background and my hands-on development work. A project gallery alone leaves recruiters and hiring managers to infer who a product serves, why it was built and which parts I contributed. I designed yongxie.dev around structured case studies so a visitor can move from a quick project overview into the decisions and implementation behind it.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Project discovery:</strong> Featured projects and a filterable portfolio help visitors choose work relevant to their interests.</li>
            <li><strong>Case-study detail:</strong> Each page brings together background, features, contribution, technical implementation and outcomes.</li>
            <li><strong>Visual evidence:</strong> Screenshot galleries and links to websites, repositories and Figma provide ways to inspect the work.</li>
            <li><strong>Professional context:</strong> About and contact pages connect project evidence to my experience and availability.</li>
            <li><strong>Responsive access:</strong> The site adapts across desktop and mobile layouts.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Explain the reasoning behind the artifact:</strong> A case-study structure makes product intent and personal scope visible alongside the UI and stack.</li>
            <li><strong>Support a quick scan and a deeper read:</strong> The catalog presents short summaries; the detail page carries the narrative and supporting images.</li>
            <li><strong>Keep content maintainable:</strong> Structured TypeScript records supply reusable components, so updating a case study does not require building a new page.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently owned product planning, Figma design, responsive frontend implementation, content structure and ongoing maintenance. This is the website you are reading. It is also a practical example of translating a communication goal into navigation, presentation and an application data model.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Application:</strong> Angular 21, TypeScript and standalone components, with Signals for reactive state including portfolio filtering and the gallery index.</li>
            <li><strong>Content model:</strong> The project catalog drives listing metadata and visibility. Project-content records and a route resolver supply case-study bodies and gallery images.</li>
            <li><strong>Rendering:</strong> Home, portfolio, about and contact pages are prerendered at build time. <code>detail/:id</code> uses client rendering, so a direct detail request returns the application shell before the browser renders the case study.</li>
            <li><strong>Styling and runtime:</strong> Tailwind CSS v4 with CSS-first theme tokens, Angular hydration with event replay, and an Express/Node.js server build. Vitest is configured for tests.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcome &amp; Trade-offs</h2>
        <p>I delivered a reusable portfolio platform for presenting product and engineering evidence in one place. Separating content records from components keeps the site straightforward to maintain, while locally authored HTML leaves narrative structure to editorial review. Client-rendered case studies are a current trade-off: their article HTML is absent from the initial server response.</p>
    `,
};
