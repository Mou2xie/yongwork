import type { IProjectContent } from "./IProjectContent";

export const molibb: IProjectContent = {
    id: 6,
    projectName: 'molibb.baby (ch)',
    description: 'Cross gate account manager',
    links: [
        { channel: 'github', url: 'https://github.com/Mou2xie/gameAccountManager/tree/main' },
        { channel: 'website', url: 'https://www.molibb.baby/' },
    ],
    image: [],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Creator & Full-stack Developer.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Hardcore MMO players, guild leaders, and account boosters often manage dozens of characters across multiple regions. Currently, they resort to Excel spreadsheets, which are difficult to view on mobile, lack visual hierarchy, and cannot effectively model nested relationships (e.g., Main Account > Sub-Account > Character).<br><br>
            <strong>The Opportunity:</strong> To replace abstract rows and columns with a visual, hierarchical database specifically designed for gaming assets, optimized for speed and mobile usage.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            "Power gamers" and service providers (boosters) who need to track daily tasks, levels, and credentials across complex account portfolios without relying on internet connectivity.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Local-First Strategy:</strong> I prioritized a "No Login" experience. By storing data locally in the browser, I eliminated server latency and alleviated user concerns regarding credential privacy.</li>
                <li><strong>Hierarchical Data Modeling:</strong> Unlike flat note-taking apps, I designed the database to support three levels of depth (Main Account → Sub-Account → Character), mirroring the actual structure of modern MMO game launchers.</li>
                <li><strong>Operational Tags:</strong> Implemented a color-coded tagging system (e.g., "Daily Task," "Priority") to allow users to filter their assets based on immediate gameplay goals.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            I built this application using a bleeding-edge stack focused on client-side performance and code maintainability:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Framework:</strong> Built with <strong>Next.js 16 (App Router)</strong>, leveraging the latest React Server Components architecture.</li>
                <li><strong>Storage Engine:</strong> Utilized <strong>Dexie.js</strong> (IndexedDB wrapper) instead of LocalStorage. This allows for asynchronous non-blocking operations, complex querying, and handling datasets larger than the standard 5MB browser limit.</li>
                <li><strong>Styling:</strong> Adopted <strong>Tailwind CSS v4</strong> and DaisyUI 5 for a modern, themable UI with a zero-runtime CSS footprint.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Service Layer Pattern:</strong> To ensure long-term maintainability, I decoupled the UI from the database logic using a strict Service Layer architecture. This ensures the code conforms to SOLID principles and allows for easy migration to a cloud backend in the future.</li>
                <li><strong>Offline Persistence:</strong> Engineered the app to be fully functional without an internet connection, ensuring reliability for users with unstable connections.</li>
            </ul>
        </p>
    `
}