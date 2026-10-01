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
    image: [],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Building a useful AI assistant still required assembling an LLM provider, a retrieval pipeline, a prompt layer and a host application. Classmates who had seen Agent Yong wanted their own personalised agent but had no practical route to one. <br><br>
            <strong>The Opportunity:</strong> A zero-code platform where anyone could create, configure and share an agent grounded in their own private documents, without touching an SDK.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Individuals and small teams who hold useful private knowledge — product guides, internal FAQs, documentation — and want an assistant over it without hiring engineers or standing up infrastructure.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Contribution</h2>
        <p>
            I led the project end-to-end within a five-person team and was the primary full-stack AI workflow contributor.
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Zero-code agent dashboard:</strong> Persona, system behaviour, conversation tone and keyword-based guardrail rules, all configurable without code.</li>
                <li><strong>RAG ingestion service:</strong> A Python/FastAPI background service accepting PDF, DOCX, TXT and MD, performing chunking and embedding generation, and reporting processing status in real time.</li>
                <li><strong>Keyword-rule chat middleware:</strong> Dynamically overrides or extends the system prompt based on user-defined keyword rules.</li>
                <li><strong>Public agent interface:</strong> A mobile-friendly shared conversation page for lightweight distribution and onboarding.</li>
                <li><strong>Project management:</strong> Maintained the team's Notion workspace covering scope, task board, milestones, meeting notes and decisions.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Frontend:</strong> React 19, TypeScript, Vite, Tailwind CSS v4, React Router v7 for navigation, TanStack Query for server state and Zustand for authentication state.</li>
                <li><strong>Streaming API:</strong> A Hono-based serverless agent API on Cloudflare Workers using LangChain and the Vercel AI SDK for streaming responses and multi-provider access through OpenRouter.</li>
                <li><strong>Retrieval:</strong> Document ingestion, chunking, embeddings, vector similarity search and retrieval implemented with Supabase, custom PostgreSQL RPC functions and embedding-based matching.</li>
                <li><strong>Realtime sync:</strong> Supabase Realtime subscriptions keep asynchronous ingestion tasks and their processing states synchronised across the application.</li>
                <li><strong>Deployment:</strong> Frontend on Vercel, chat API on Cloudflare Workers, and the Python/FastAPI RAG and embedding service personally deployed on Railway.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Outcomes</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>1st Place — Mobile and Web Development Winter 2026 ACSIT Capstone Showcase</strong> (team award).</li>
                <li>NovaAgent was confirmed running in September 2026. This is a dated operating status, not an uptime guarantee.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Trade-offs & Current Status</h2>
        <p>
            The system deliberately spans three services — a Workers API, a Vercel frontend and a Railway Python service — which buys provider flexibility and independent scaling at the cost of more moving parts to operate. Ongoing feature iteration beyond the capstone has not been separately confirmed.
        </p>
    `,
};
