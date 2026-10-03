import type { IProjectContent } from './IProjectContent';

export const novaagent: IProjectContent = {
    id: 304,
    projectName: 'NovaAgent',
    description:
        'No-code platform for building and sharing custom AI agents backed by private knowledge bases',
    role: 'Project Leader · Lead Full-Stack Engineer',
    status: 'Live',
    teamSize: 5,
    timeline: 'Jan 2026 – Apr 2026',
    scopeNote:
        'Five-person capstone. I led end-to-end development and personally built the agent dashboard, the RAG ingestion service, the keyword-rule chat middleware and the public agent interface. Awards and remaining system components are team scope.',
    links: [
        { channel: 'website', url: 'https://www.novaagent.me/' },
        { channel: 'github', url: 'https://github.com/Mou2xie/agent_builder_frontend' },
        { channel: 'github', url: 'https://github.com/Mou2xie/agent_builder_backend' },
        { channel: 'github', url: 'https://github.com/Mou2xie/agent_builder_rag_service' },
    ],
    image: [
        '/projects/novaagent/2.png',
        '/projects/novaagent/1.png',
        '/projects/novaagent/personnel.png',
        '/projects/novaagent/knowledge-base.png',
        '/projects/novaagent/behavior.png',
        '/projects/novaagent/share.png',
    ],
    imageCaptions: {
        '/projects/novaagent/2.png': 'NovaAgent public assistant — shared conversation page, captured October 2026.',
        '/projects/novaagent/1.png': 'NovaAgent landing page — entry point for creating an agent, captured October 2026.',
        '/projects/novaagent/personnel.png': 'NovaAgent personnel settings — agent name, persona, job description, goals and avatar.',
        '/projects/novaagent/knowledge-base.png': 'NovaAgent knowledge base — uploaded documents and document upload controls.',
        '/projects/novaagent/behavior.png': 'NovaAgent behavior settings — welcome message and conversation tone.',
        '/projects/novaagent/share.png': 'NovaAgent sharing — public conversation link and downloadable QR code.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>NovaAgent grew out of <a href="/detail/303" class="text-accent underline underline-offset-4">Agent Yong</a>. After classmates tried my conversational portfolio, they wanted personalized assistants of their own. Our capstone advisor suggested turning that interest into a platform anyone could use. Market and user-demand research shaped the direction: individuals and small businesses needed a lightweight way to turn private knowledge into an interactive assistant without assembling their own AI infrastructure.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <p>We built a zero-code agent platform for use cases such as product guides, help desks and personal knowledge assistants. The core journey is to configure an agent, add its knowledge, and share a conversation page.</p>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Agent configuration:</strong> Set a persona, system behavior and conversation tone through a management dashboard.</li>
            <li><strong>Private knowledge:</strong> Upload PDF, DOCX, TXT or Markdown documents and see processing updates while they are prepared for retrieval.</li>
            <li><strong>Keyword rules:</strong> Configure instructions that extend or override the system prompt when specified keywords appear.</li>
            <li><strong>Lightweight distribution:</strong> Share a mobile-friendly agent page through a link or QR code.</li>
            <li><strong>Streaming chat:</strong> Let visitors read a response as it arrives.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Keep it easy to understand and use:</strong> Use simple, everyday words instead of technical terms, so people can set up and manage an agent without needing a technical background.</li>
            <li><strong>Use private knowledge to improve answers:</strong> A RAG system keeps uploaded documents available for the agent to look up when answering questions, helping it give more accurate answers based on the user's own information.</li>
            <li><strong>Make sharing and access simple:</strong> Give each agent a link and QR code so creators can share it easily and others can open a conversation with a click or scan.</li>
            <li><strong>Build for the web first:</strong> Let people use NovaAgent directly in their browser, including on phones, without downloading a separate mobile app. Removing that extra step makes the product easier to access.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I led end-to-end development within a five-person capstone team and was the primary full-stack and AI workflow contributor. I personally designed and built the agent dashboard, background RAG ingestion service, keyword-rule chat middleware and public conversation interface. I also maintained our Notion workspace for scope, task breakdown, milestones, meeting notes and decisions, connecting product planning with day-to-day delivery.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Frontend:</strong> React 19, TypeScript, Vite and Tailwind CSS v4, with React Router, TanStack Query for server state and Zustand for authentication state.</li>
            <li><strong>Knowledge pipeline:</strong> Python and FastAPI load documents, split them into chunks, generate embeddings and update ingestion task status. Supabase Realtime delivers those updates to the dashboard.</li>
            <li><strong>Retrieval and chat:</strong> Supabase PostgreSQL RPC functions perform vector similarity retrieval. A Hono API on Cloudflare Workers uses LangChain, the Vercel AI SDK and OpenRouter to orchestrate streamed responses.</li>
            <li><strong>Deployment:</strong> The frontend runs on Vercel and the chat API on Cloudflare Workers. I personally deployed the Python RAG and embedding service on Railway.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcomes</h2>
        <p>Our five-person team won <strong>1st Place — Mobile and Web Development Winter 2026 ACSIT Capstone Showcase</strong>. NovaAgent brought together product research, team coordination and hands-on AI engineering in a working web platform. It was confirmed running in September 2026.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Trade-offs &amp; Current Status</h2>
        <p>Separating the frontend, streaming API and document-processing service gives each stage its own deployment boundary, but adds coordination and operational complexity. Embedding retrieval and keyword rules support grounded, configurable conversations; they still depend on document quality, retrieval relevance and model behavior. The project remains a team capstone with a publicly accessible site.</p>
    `,
};
