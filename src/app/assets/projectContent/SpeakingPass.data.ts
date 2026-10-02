import type { IProjectContent } from './IProjectContent';

export const speakingPass: IProjectContent = {
    id: 2,
    projectName: 'SpeakingPass',
    description:
        'IELTS Speaking preparation platform with a seasonally updated, database-backed topic bank',
    role: 'Full-Stack Developer · Product Owner',
    status: 'Production',
    teamSize: 1,
    timeline: 'Oct 2024 – Present',
    scopeNote:
        'Independently owned end to end: product strategy, content curation, architecture, implementation, SEO, analytics and ongoing operation.',
    links: [
        {
            channel: 'figma',
            url: 'https://www.figma.com/design/sev2kFiBxPmh67C1YcZPlU/SpeakingPass_v3?node-id=0-1&t=FY3SlpVQxFMVtaLU-1',
        },
        { channel: 'github', url: 'https://github.com/Mou2xie/SpeakingPass_v3' },
        { channel: 'website', url: 'https://www.speakingpass.com' },
    ],
    image: [
        '/projects/speakingpass/1.png',
        '/projects/speakingpass/2.png',
        '/projects/speakingpass/3.png',
        '/projects/speakingpass/4.png',
        '/projects/speakingpass/5.png',
    ],
    imageCaptions: {
        '/projects/speakingpass/1.png': 'SpeakingPass — question-bank homepage and topic discovery.',
        '/projects/speakingpass/2.png': 'SpeakingPass — Part 1 topic categories.',
        '/projects/speakingpass/3.png': 'SpeakingPass — Part 1 sample answers and practice guidance.',
        '/projects/speakingpass/4.png': 'SpeakingPass — Part 2 and Part 3 topic list.',
        '/projects/speakingpass/5.png': 'SpeakingPass — cue-card answer and follow-up discussion.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>SpeakingPass grew out of my own IELTS preparation. Speaking was my weakest skill, and I spent weeks collecting exam topics and writing structured practice answers. After reaching my target score, I saw an opportunity to make that preparation work useful to other candidates. The problem was not simply a lack of questions: materials were scattered, their recency was hard to judge, and learners had to piece together examples and strategies before they could practice.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <p>I built a focused IELTS Speaking content platform that brings topic discovery, model answers and practice guidance into one responsive website. It serves candidates preparing for all three parts of the Speaking test.</p>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Complete practice structure:</strong> Part 1 interview questions and Part 2 cue cards are organized with related Part 3 follow-up discussions.</li>
            <li><strong>Seasonal organization:</strong> Current-season groups and New badges help users identify recent material, while Must-Test and Past topics remain browsable.</li>
            <li><strong>Model answers and guidance:</strong> Band 8+ level sample answers and examiner-style tips give learners reference material for their own practice.</li>
            <li><strong>Mobile access:</strong> Responsive navigation and topic pages support preparation on a phone as well as a desktop.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Organize around the preparation journey:</strong> Exam parts, seasonal groups and topic status give learners a practical route from finding material to rehearsing an answer.</li>
            <li><strong>Treat content operation as part of the product:</strong> I curate topics each season and author sample answers and tips. Supabase holds that structured content so editorial work does not require changing application code.</li>
            <li><strong>Support discovery:</strong> Server-rendered content, descriptive routes, dynamic metadata and a generated sitemap make individual topic pages available as entry points.</li>
            <li><strong>Connect operation to feedback:</strong> I integrated Google Analytics 4 to observe use and Google AdSense as an advertising component of the site.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently owned product strategy, Figma/UI design, the IELTS content workflow, database and application architecture, full-stack development, SEO, analytics and advertising integration, deployment and ongoing maintenance. The work combines an educational content product with the system needed to publish and operate it.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Server-first application:</strong> Next.js 15 App Router, React 19 and strict TypeScript, with React Server Components and Suspense skeleton fallbacks. Client components handle interactive navigation and local UI state.</li>
            <li><strong>Relational content:</strong> A three-table Supabase PostgreSQL model uses foreign keys and nested queries to connect exam topics and their supporting content.</li>
            <li><strong>Data access:</strong> Server Actions query Supabase without a separate application API route layer. The database client is isolated in a <code>server-only</code> module.</li>
            <li><strong>Publishing:</strong> Database content supplies per-route metadata and encoded slugs. <code>next-sitemap</code> generates content-route entries during the build.</li>
            <li><strong>Interface and hosting:</strong> Tailwind CSS v4, DaisyUI v5 and fonts loaded through <code>next/font</code>; deployment on Vercel.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcomes</h2>
        <p>SpeakingPass recorded <strong>1,150 monthly active users in August 2026</strong>, according to Google Analytics. I continue to operate and iterate on the product, maintaining both its content and implementation. The site demonstrates ownership beyond launch: topic curation, discoverability and analytics sit alongside the engineering work.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Trade-offs &amp; Current Status</h2>
        <p>The database separates editorial changes from code changes, while rendering and caching determine when an update appears. The sitemap is generated at build time and needs a new build to reflect additional routes. Sample answers are preparation references, not a promised test score. SpeakingPass remains an operating independent product.</p>
    `,
};
