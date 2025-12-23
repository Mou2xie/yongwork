import type { IProjectContent } from "./IProjectContent";

export const horoscopechinois: IProjectContent = {
    id: 4,
    projectName: 'horoscopechinois.today (fr)',
    description: 'Online Chinese traditional astrology',
    links: [
        { channel: 'website', url: 'https://www.horoscopechinois.today/' },
    ],
    image: [],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Full-stack Developer & Product Designer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Accessing cultural insights like the Chinese Zodiac is often a frustrating experience. The market is saturated with sites plagued by aggressive ads, outdated designs, and clutter. Users simply want to answer two questions: "Which sign am I?" and "What does my day look like?" without the friction. <br><br>
            <strong>The Opportunity:</strong> To modernize this traditional vertical by delivering a clean, app-like web experience that respects the user's time and attention.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Francophone users interested in astrology and cultural wisdom who value aesthetics, speed, and mobile accessibility over traditional, cluttered information portals.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Streamlined Discovery:</strong> I identified that many users don't know their sign. I built an interactive "Zodiac Finder" as a core entry point to lower the barrier to entry.</li>
                <li><strong>Localization Strategy:</strong> Targeted the French-speaking market specifically to fill a gap for high-quality, culturally nuanced content in that region.</li>
                <li><strong>Visual Hierarchy:</strong> Adopted a "Mobile-First" design philosophy using clean typography and immediate data presentation (0-5 star ratings) to make daily insights scannable in seconds.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            This project showcases my ability to adopt bleeding-edge technologies for superior performance:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Modern Architecture:</strong> Built on <strong>Next.js 15 (App Router)</strong>. I utilized <strong>React Server Components</strong> to render content instantly on the server, significantly improving SEO and load speeds.</li>
                <li><strong>Data Fetching:</strong> Instead of a traditional API layer, I implemented <strong>Server Actions</strong> to query the <strong>Supabase</strong> (PostgreSQL) database directly and securely, reducing latency and simplifying the codebase.</li>
                <li><strong>Styling Engine:</strong> Early adopter of <strong>Tailwind CSS v4</strong> for a zero-runtime styling solution, paired with DaisyUI for consistent component design.</li>
                <li><strong>Type Safety:</strong> Enforced strict <strong>TypeScript</strong> data modeling to handle complex fortune structures and zodiac profiles without runtime errors.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Core Web Vitals:</strong> Achieved optimal performance metrics by using <code>next/image</code> to prevent Layout Shifts (CLS) and Turbopack for rapid development iterations.</li>
                <li><strong>Future-Proofing:</strong> Pre-configured <strong>Zustand</strong> for global state management, ensuring the architecture can support user authentication and personalization features as the product scales.</li>
            </ul>
        </p>
    `
}