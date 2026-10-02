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
    image: [
        '/projects/fixmycity/mobile-1.png',
        '/projects/fixmycity/mobile-2.png',
        '/projects/fixmycity/mobile-3.png',
    ],
    imageCaptions: {
        '/projects/fixmycity/mobile-1.png': 'Fix My City mobile prototype — resident home and recent reports (team-built interface).',
        '/projects/fixmycity/mobile-2.png': 'Fix My City mobile prototype — issue-category step in the reporting wizard (team-built interface).',
        '/projects/fixmycity/mobile-3.png': 'Fix My City mobile prototype — submitted report and status timeline (team-built interface).',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>Our five-person capstone team wanted to apply emerging technology to a civic problem. Research into earlier projects helped shape Fix My City: a shared reporting workflow for residents and municipal operations staff. Fragmented phone calls, forms and spreadsheets make it hard to keep a report connected to its evidence and subsequent progress. Residents need a clear way to report a pothole, broken streetlight or illegal dumping; staff need structured information to review and coordinate a response.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <p>The team built a mobile reporting application and web operations dashboard connected through a common backend. The product follows a report from citizen submission through administrative review and status updates.</p>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Guided reporting:</strong> A guided mobile wizard gathers a photo, description and location, with GPS capture and address lookup in the team implementation.</li>
            <li><strong>Visible progress:</strong> Residents can follow a status timeline rather than losing contact with a report after submission.</li>
            <li><strong>AI-assisted triage:</strong> Image moderation screens normal-path submissions, while description analysis suggests a category and a 1–5 priority score.</li>
            <li><strong>Operations workspace:</strong> A realtime issue feed, map views and filters help staff review incoming reports. Proximity-based duplicate detection identifies nearby submissions within the project's 20-meter rule.</li>
            <li><strong>Governance and portability:</strong> Administrator/supervisor roles, issue history, configurable SLA tracking and CSV/JSON export support the team's operational workflow.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Design both sides of the service:</strong> I mapped the resident reporting journey and the staff dashboard together, so citizen evidence could become an actionable item in the operations workflow.</li>
            <li><strong>Guide input before automating interpretation:</strong> The reporting wizard structures the submission; AI classification then supplies suggestions for administrative review.</li>
            <li><strong>Make workload and progress visible:</strong> The dashboard combines issue status, maps and resolution targets, while the resident timeline closes the feedback loop.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I personally owned end-to-end product and UI/UX design in Figma, including the five-step reporting wizard and the map-integrated operations dashboard. I also implemented the AI image-moderation pipeline and issue-triage/priority workflow. The Flutter mobile client, React dashboard implementation, mapping, notifications and broader data infrastructure were built within the five-person team.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Image moderation — my implementation:</strong> An Express service calls OpenAI Vision to screen inappropriate or unrelated images on the normal submission path.</li>
            <li><strong>Structured triage — my implementation:</strong> A Deno-based Supabase Edge Function, <code>categorize-issue</code>, calls GPT-4o-mini to extract category and priority fields from a report description. Regex-based heuristics provide a fallback on remote exceptions or timeouts.</li>
            <li><strong>Team architecture:</strong> Flutter iOS/Android clients and a React dashboard share Supabase PostgreSQL, Auth, Storage and Realtime. Leaflet/Google Maps provide geospatial views; Resend and Firebase Cloud Messaging handle notifications.</li>
            <li><strong>Operational model — team scope:</strong> Role-based data access, issue logs and a configured 48-hour resolution target support review and supervisory oversight.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcomes</h2>
        <p>Our five-person team won <strong>Best Final Year Project — Conestoga College 2026 Tech Showcase</strong>. The project reportedly attracted interest from the City of Cambridge, Ontario. My work connected product/interface design with the AI services behind a deployed capstone prototype.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Trade-offs &amp; Current Status</h2>
        <p>Remote image moderation fails open: a service failure can allow processing to continue without that moderation result. The 48-hour target is a prototype setting, not an achieved municipal SLA. Fix My City remains a capstone prototype; reported municipal interest has not established adoption, a contract or a partnership.</p>
    `,
};
