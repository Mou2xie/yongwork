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
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Full-Stack Developer &amp; Product Owner
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            IELTS Speaking topics rotate on a seasonal cycle, so candidates worry about facing questions they have never seen. Existing study resources are fragmented, frequently out of date, and awkward to use on a phone. <br><br>
            <strong>The Opportunity:</strong> A single, always-current topic bank that is organised around the live exam cycle, so preparation time goes into practising rather than hunting for material.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            IELTS candidates — particularly those aiming for Band 8+ — who need reliable, current practice material and model answers they can reach on the go.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Organise by exam season:</strong> The database is structured strictly by seasonal groups and flags must-test topics, so users see what is current instead of working through obsolete questions.</li>
                <li><strong>Supabase as a headless CMS:</strong> Content lives in Supabase rather than in the repository, so topics can be updated without a code change or redeployment.</li>
                <li><strong>Server-first rendering:</strong> Content pages are server-rendered by default, with only the few genuinely interactive components opting into client rendering. This keeps discoverability and payload in balance.</li>
                <li><strong>Sustainable and free to the user:</strong> Google AdSense keeps the core content free while providing a maintenance revenue path.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Framework:</strong> Next.js 15 App Router with React 19 and TypeScript in strict mode, using React Server Components and Suspense boundaries with skeleton fallbacks.</li>
                <li><strong>Data access:</strong> Server Actions query Supabase directly from server components, with no separate application API route layer. The Supabase client module is guarded by <code>server-only</code>.</li>
                <li><strong>Data model:</strong> A relational PostgreSQL schema across three tables with foreign-key constraints and nested query patterns.</li>
                <li><strong>SEO:</strong> Per-route dynamic metadata generated from database content, custom URL encoding for clean route slugs, and a sitemap generated from the database during the build step.</li>
                <li><strong>Styling:</strong> Tailwind CSS v4 with DaisyUI v5 and three self-hosted Google Fonts loaded through <code>next/font</code>.</li>
                <li><strong>Analytics and advertising:</strong> Google Analytics 4 and Google AdSense integrated with framework-supported script loading.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Outcomes</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>1,150 monthly active users</strong> recorded for August 2026 in Google Analytics.</li>
                <li>Removed an entire API route layer by querying Supabase from Server Actions, which simplified the architecture and reduced the surface area to maintain.</li>
                <li>Implemented dynamic metadata and build-time sitemap generation for the documented content routes, and continues to be iterated and operated.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Trade-offs & Current Status</h2>
        <p>
            The performance rationale for server components — smaller bundles and improved First Contentful Paint — is an architectural argument, not a measured result, so no Core Web Vitals improvement is claimed here. The sitemap is generated at build time, which means a database content update does not by itself refresh the published sitemap; automatic revalidation is not configured. Advertising integration does not by itself establish profitability.
        </p>
    `,
};
