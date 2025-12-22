import type { IProjectContent } from "./IProjectContent";

export const speakingPass: IProjectContent = {
    id: 2,
    projectName: 'speakingpass.com',
    description: 'IELTS speaking test topic bank',
    links: [
        { channel: 'figma', url: 'https://www.figma.com/design/sev2kFiBxPmh67C1YcZPlU/SpeakingPass_v3?node-id=0-1&t=FY3SlpVQxFMVtaLU-1' },
        { channel: 'github', url: 'https://github.com/Mou2xie/SpeakingPass_v3' },
        { channel: 'website', url: 'https://www.speakingpass.com' },
    ],
    image: [],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Product Designer & Developer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            IELTS Speaking topics rotate seasonally (every 4 months), creating significant anxiety for students who fear facing unknown questions. Existing study resources are often fragmented, outdated, or difficult to navigate on mobile devices. <br><br>
            <strong>The Opportunity:</strong> To build a centralized, "always-current" database that demystifies the exam cycle, offering a structured path to preparation that saves students time.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            IELTS candidates—specifically those aiming for Band 8+ scores—who need reliable, up-to-date practice materials and model answers accessible on the go.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Seasonal Content Strategy:</strong> I structured the database strictly by exam seasons (e.g., "Sep - Nov"). This prioritizes relevance, ensuring users focus only on "Current" and "Must-Test" topics rather than wasting time on obsolete questions.</li>
                <li><strong>Automated Content Operations:</strong> To scale content production without a large editorial team, I integrated n8n workflows. This automated pipeline generates high-quality model answers and syncs them directly to the database, significantly reducing the time-to-market when new exam topics are released.</li>
                <li><strong>Mobile-First Experience:</strong> Recognizing that speaking practice often happens away from a desk, I prioritized a responsive, lightweight UI that performs flawlessly on mobile devices.</li>
                <li><strong>Sustainability:</strong> Integrated Google AdSense to keep the core content free for students while establishing a sustainable revenue model for maintenance.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            The platform is built on a cutting-edge stack designed for speed and SEO dominance:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Core Framework:</strong> Built with <strong>Next.js 15 (App Router)</strong> and <strong>React 19</strong>, leveraging React Server Components (RSC) to reduce client-side bundle size and improve load times.</li>
                <li><strong>Backend & Data:</strong> Integrated <strong>Supabase</strong> (PostgreSQL) for dynamic content management. This allows for real-time updates to the question bank without requiring full application redeployments.</li>
                <li><strong>Styling:</strong> Utilized <strong>Tailwind CSS v4</strong> and DaisyUI v5 for rapid, consistent UI development.</li>
                <li><strong>Type Safety:</strong> Enforced strict <strong>TypeScript</strong> standards to ensure codebase robustness and maintainability.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>SEO Optimization:</strong> Implemented dynamic metadata generation for every topic page and automated sitemaps, ensuring new content is immediately indexed by search engines.</li>
                <li><strong>Performance Engineering:</strong> Achieved superior Core Web Vitals (specifically First Contentful Paint) by self-hosting fonts with <code>next/font</code> to eliminate layout shifts (CLS) and fetching data server-side.</li>
                <li><strong>Scalable Architecture:</strong> Designed the system to handle "Season Rotations" effortlessly. Updating a single global constant reflects the new exam cycle across the entire platform, minimizing maintenance overhead.</li>
            </ul>
        </p>
    `
}