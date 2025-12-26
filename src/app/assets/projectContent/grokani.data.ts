import type { IProjectContent } from "./IProjectContent";

export const grokani: IProjectContent = {
    id: 5,
    projectName: 'grokani.love',
    description: 'Guide book for building affection with Ani',
    links: [
        { channel: 'github', url: 'https://github.com/Mou2xie/grokAni' },
        { channel: 'website', url: 'https://grokani.love/' },
    ],
    image: ['/projects/grokani/1.png', '/projects/grokani/2.png', '/projects/grokani/3.png', '/projects/grokani/4.png', '/projects/grokani/5.png'],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Full-stack Developer & Product Designer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Users of AI companions often face the "Blank Slate" problem—they hit conversation plateaus, fail to trigger advanced personality modes, and eventually churn due to a lack of direction.<br><br>
            <strong>The Opportunity:</strong> To transform the passive chat experience into an active, gamified progression system. By deconstructing the "Affection Level" mechanics, I could provide users with a structured roadmap to deepen their interactions.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            The global community of Grok/Ani AI enthusiasts who want to unlock full personality capabilities but struggle with "Prompt Engineering" or conversation starters.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Gamification Strategy:</strong> I designed a "7-Day Action Plan" to guide users from "Stranger" to "Intimate Partner." This turns vague usage into a clear, achievable user journey.</li>
                <li><strong>Frictionless UX:</strong> Implemented a "One-Click Copy" interaction model for prompt templates. The goal was to minimize the time between finding a prompt and using it in the AI chat.</li>
                <li><strong>Client-Side i18n:</strong> Recognizing that users often compare prompts across languages (English/Japanese) to test AI nuances, I opted for instant, state-based language switching rather than slow page reloads.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            I leveraged the absolute bleeding edge of web development to ensure high performance and future-proofing:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Framework:</strong> Built with <strong>Next.js 15.4 (App Router)</strong> and <strong>React 19</strong>, utilizing the latest concurrent rendering features and server-side paradigms.</li>
                <li><strong>Styling Engine:</strong> Early adoption of <strong>Tailwind CSS v4</strong>. I utilized the new high-performance engine for faster build times and a simplified, CSS-first configuration.</li>
                <li><strong>State Management:</strong> Implemented <strong>Zustand</strong> for a lightweight global store, specifically handling the dynamic localization logic without heavy middleware overhead.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Architectural Decision:</strong> I deliberately bypassed standard route-based i18n (e.g., <code>/en/</code> vs <code>/jp/</code>) in favor of a custom Zustand store strategy. This provides a "snappier" SPA feel essential for a tool used side-by-side with a chat application.</li>
                <li><strong>Developer Experience:</strong> Utilized <strong>Turbopack</strong> for instant Hot Module Replacement (HMR), ensuring a rapid development feedback loop even with complex React 19 hooks.</li>
            </ul>
        </p>
    `
}
