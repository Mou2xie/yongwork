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
        '/projects/yongwork/1.png',
        '/projects/yongwork/2.png',
        '/projects/yongwork/3.png',
        '/projects/yongwork/4.png',
        '/projects/yongwork/5.png',
    ],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Creator, Product Manager &amp; Engineer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Developer portfolios usually suffer from the "gallery problem": a wall of screenshots that shows what was built but never why, what trade-offs were made, or who the product was for. Recruiters and hiring managers are left to infer all of it. <br><br>
            <strong>The Opportunity:</strong> Treat every project as a structured product case study, and make the data model itself enforce that narrative so no entry can omit its audience or its decisions.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Recruiters, engineering managers and product leaders looking for someone who understands both the business "why" and the technical "how".
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>PM thinking enforced by types:</strong> The case-study interface requires a role, target audience and explicit product decisions, so the structure itself pushes each entry toward product reasoning rather than a feature list.</li>
                <li><strong>Content as data:</strong> Project narrative lives in TypeScript data files, decoupled from presentation. Adding a project is a data change, not a UI change.</li>
                <li><strong>Separate the catalog from the case study:</strong> Names, descriptions, covers, ordering and visibility live in one catalog; the case-study files carry only narrative and links. List and detail pages read the same source, so they cannot disagree.</li>
                <li><strong>Honest rendering claims:</strong> The rendering strategy below reflects what the build actually does, not an aspirational target.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Framework:</strong> Angular 21 with standalone components throughout and no NgModules.</li>
                <li><strong>Reactivity:</strong> Angular Signals for local state — a <code>computed</code> value drives portfolio filtering and a <code>signal</code> drives the image-gallery index — so updates touch only the DOM that depends on them.</li>
                <li><strong>Rendering:</strong> Angular SSR with Express. The four static pages (<code>/</code>, <code>/portfolio</code>, <code>/about-me</code>, <code>/contact</code>) are prerendered at build time, so their HTML is present in the initial response. The detail route <code>detail/:id</code> is configured as client-rendered, so a case study is fetched and rendered in the browser and a direct request returns the application shell rather than the article markup.</li>
                <li><strong>Hydration:</strong> Non-destructive hydration with event replay, so prerendered pages become interactive without a repaint.</li>
                <li><strong>Styling:</strong> Tailwind CSS v4 configured CSS-first through <code>@theme</code>, defining the palette and font variables in one place.</li>
                <li><strong>Architecture:</strong> Feature-based folders grouped by domain rather than by file type.</li>
                <li><strong>Testing:</strong> Vitest is configured as the test runner. Test coverage is not claimed.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Trade-offs & Current Status</h2>
        <p>
            Client-rendering the detail route was a deliberate simplification, and it has a real cost: case-study content is not in the initial HTML, so link previews and crawlers see the shell rather than the article. Moving public case studies to prerendering with per-project metadata is the identified next step, gated on confirming the deployment model. Vitest being configured does not mean the suite is comprehensive.
        </p>
    `,
};
