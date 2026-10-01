import type { IProjectContent } from './IProjectContent';

export const fixmycity: IProjectContent = {
    id: 9,
    projectName: 'Fix My City',
    description:
        'AI-powered civic issue reporting platform with admin triage and moderation workflows',
    role: 'Product Designer · AI Workflow Developer',
    status: 'Prototype',
    teamSize: 5,
    timeline: 'Feb 2026 – Apr 2026',
    scopeNote:
        'Five-person capstone. My documented contribution is end-to-end product and UI/UX design plus the AI moderation and issue-triage workflows. The Flutter mobile client, React dashboard, mapping and notification layers are team scope, not my individual implementation.',
    links: [
        { channel: 'website', url: 'https://fixmycity-welcome.vercel.app/' },
        { channel: 'website', url: 'https://fixmycityadmindashboard.vercel.app' },
    ],
    image: ['/projects/fixmycity/1.png'],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Municipalities often collect civic complaints through disconnected hotlines, web forms and spreadsheets. Reports get lost, residents cannot see progress, and staff must manually read, classify and dispatch hundreds of photo-and-text submissions a day. <br><br>
            <strong>The Opportunity:</strong> A single pipeline where a citizen submits a geo-tagged photo and the incoming report is screened, categorised and prioritised automatically before a human ever opens it.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Residents reporting local infrastructure problems such as potholes, broken streetlights and illegal dumping, plus the municipal operations staff who triage and resolve those reports.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Contribution</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Product &amp; UI/UX design:</strong> The end-to-end interface architecture in Figma, including a five-step citizen reporting wizard and a data-dense, map-integrated operations dashboard.</li>
                <li><strong>Image moderation:</strong> An Express microservice using OpenAI Vision to screen submitted images for inappropriate or unrelated content before they enter the normal path.</li>
                <li><strong>Issue triage and priority scoring:</strong> A Deno-based Supabase Edge Function (<code>categorize-issue</code>) calling GPT-4o-mini to extract structured category and priority fields from the citizen's description.</li>
                <li><strong>Failure-path handling:</strong> Runtime fallbacks so a remote AI exception or timeout degrades to local regex-driven heuristics rather than blocking submission.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Team System</h2>
        <p>
            The complete five-person system — not my individual implementation — comprises Flutter iOS/Android clients, a React admin dashboard served from Vercel, a Supabase backend with row-level security, Leaflet and Google Maps visualisation, SLA tracking with a configured 48-hour target, and email and push notifications via Resend and Firebase Cloud Messaging.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Outcomes</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Best Final Year Project — Conestoga College 2026 Tech Showcase</strong> (team award).</li>
                <li>The project reportedly generated interest from the City of Cambridge, Ontario. This is recorded interest, not a contract, partnership or adoption.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Trade-offs & Current Status</h2>
        <p>
            The moderation pipeline fails open: if the remote vision service is unavailable, processing continues so a citizen is never blocked, which means moderation is not guaranteed on that path. The 48-hour SLA is a project configuration rather than a verified municipal standard, and the deployed prototype is not in production use.
        </p>
    `,
};
