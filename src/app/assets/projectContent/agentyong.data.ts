import type { IProjectContent } from './IProjectContent';

export const agentyong: IProjectContent = {
    id: 303,
    projectName: 'Agent Yong',
    description: 'Conversational AI portfolio with indexed, file-based knowledge retrieval',
    role: 'Product Owner · Full-Stack Engineer',
    status: 'Live',
    teamSize: 1,
    timeline: 'Dec 2025 – Present',
    scopeNote:
        'Independently designed, built, deployed and maintained. Runs as a separate application from this portfolio site and links back into it.',
    links: [
        { channel: 'github', url: 'https://github.com/Mou2xie/agent_me' },
        { channel: 'website', url: 'https://www.agentyong.chat/' },
    ],
    image: ['/projects/agentyong/1.png', '/projects/agentyong/2.png'],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            A static resume is a one-way broadcast. Recruiters sift through hundreds of documents, and a portfolio site shows every visitor the same thing regardless of what they actually care about — the hiring manager wants architecture decisions, the recruiter wants role history, the engineer wants to know how the retrieval works. <br><br>
            <strong>The Opportunity:</strong> Turn the profile into a conversation, so each visitor can pull the depth they want on their own terms.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Recruiters, hiring managers and technical leads evaluating my fit. The design goal is a low-friction first interaction that converts a passive document read into an active exploration.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Contribution</h2>
        <p>
            I built the whole application: product concept, AI interaction design, frontend architecture, the server-side chat route, the agent and its tool layer, the Markdown knowledge corpus, deployment and ongoing maintenance.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Grounded over generative:</strong> Rather than letting the model answer from memory, the agent receives an index of document paths and descriptions in its system prompt, selects relevant records, and reads their full content on demand through a single <code>knowledgeReader</code> tool. Answers are grounded in documents I wrote and can review.</li>
                <li><strong>Markdown as the knowledge base:</strong> Plain Markdown files under <code>src/assets/knowledge/</code> keep the corpus editable and diffable, with no vector database or embedding index to maintain.</li>
                <li><strong>Structured validation:</strong> The tool's path input is validated with Zod and restricted to <code>.md</code> files inside the knowledge directory, so the agent cannot read arbitrary files.</li>
                <li><strong>Mobile-first conversation:</strong> Quick-question prompts lower the cost of the first message and the layout is built mobile-first with Tailwind CSS, since many visitors arrive from a phone.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Framework:</strong> Next.js 16 App Router with React 19 and TypeScript, separating the client chat interface, a server-side chat API route and the agent layer.</li>
                <li><strong>Agent layer:</strong> LangChain.js constructs the agent with one retrieval tool; the system prompt loads from <code>systemPrompt.md</code> with the body of <code>knowledgeIndex.md</code> appended.</li>
                <li><strong>Streaming:</strong> The Vercel AI SDK bridges the LangChain stream to the client, with OpenRouter providing model access.</li>
                <li><strong>Styling:</strong> Tailwind CSS v4 with a mobile-first responsive layout.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Outcomes</h2>
        <p>
            Agent Yong reimagines the portfolio as a dialogue and is the project that prompted the NovaAgent capstone — classmates who saw it wanted the same capability for their own knowledge. It was confirmed running in September 2026, with an implementation iteration confirmed the same month.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Trade-offs & Current Status</h2>
        <p>
            File-based agentic retrieval is not the same as vector RAG: there is no embedding pipeline or similarity search, so relevance depends on the agent choosing well from the index descriptions. Prompt instructions and tool availability do not force a tool call on every turn, and I make no claim that responses are always correct or hallucination-free. A measured latency or accuracy comparison against other architectures is not available.
        </p>
    `,
};
