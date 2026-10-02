import type { IProjectContent } from './IProjectContent';

export const molibb: IProjectContent = {
    id: 6,
    projectName: 'molibb.baby',
    description: 'Local-first game account manager for tracking accounts and characters',
    role: 'Indie Developer',
    status: 'Live',
    teamSize: 1,
    scopeNote:
        'Built independently for a friend who plays Cross Gate, using AI-assisted development. Feature development and launch were completed in one day — a candidate-reported delivery period, not a measured comparison against another method.',
    links: [
        { channel: 'github', url: 'https://github.com/Mou2xie/gameAccountManager/tree/main' },
        { channel: 'website', url: 'https://www.molibb.baby/' },
    ],
    image: [
        '/projects/molibb/1.png',
        '/projects/molibb/2.png',
        '/projects/molibb/3.png',
        '/projects/molibb/4.png',
        '/projects/molibb/5.png',
    ],
    imageCaptions: {
        '/projects/molibb/1.png': 'molibb.baby — account-management overview.',
        '/projects/molibb/2.png': 'molibb.baby — accounts and linked character records.',
        '/projects/molibb/3.png': 'molibb.baby — editing an account record.',
        '/projects/molibb/4.png': 'molibb.baby — adding character details.',
        '/projects/molibb/5.png': 'molibb.baby — account information and notes.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>A friend who plays Cross Gate needed a lightweight way to manage game accounts and characters. Account details have a hierarchy — main account, sub-account and character — that is awkward to represent as a flat list. I scoped the product around that concrete need, with a visual interface for keeping records and finding the characters relevant to a gameplay task.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Account hierarchy:</strong> Organize main accounts, their sub-accounts and the characters belonging to each.</li>
            <li><strong>Character records:</strong> Track fields such as class, level, job rank and notes, alongside task/status information.</li>
            <li><strong>Tags and filtering:</strong> Use custom color-coded tags to organize and find characters.</li>
            <li><strong>Local persistence:</strong> Keep account and character records in the browser through IndexedDB, without an application account/login step.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <p>I matched the data model to the player's account structure and used cards and tags to make that structure visible. Local storage kept the initial scope focused on a single user's browser. Cloud synchronization, backup import/export and installable PWA support were possible extensions rather than requirements for the first delivery.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently built and launched the tool for my friend using AI-assisted development. Feature development and launch took one day, based on my recorded delivery account. I owned the scope, interface, account/character model and implementation.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <p>Next.js 16 App Router, React 19 and TypeScript provide the application structure. Dexie.js wraps IndexedDB for local account and character data. A service layer separates database operations from UI components. Tailwind CSS v4, DaisyUI 5 and Lucide React support the interface.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcome &amp; Trade-offs</h2>
        <p>I delivered a focused tool for a specific user instead of expanding the first version into a general gaming platform. Local data remains tied to the browser: synchronization and backup/import-export were not shipped features in the documented version. Local persistence also differs from offline installation; PWA support remains a separate extension.</p>
    `
}