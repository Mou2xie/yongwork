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
    image: [
        '/projects/agentyong/current-home.png',
        '/projects/agentyong/current-mobile.png',
    ],
    imageCaptions: {
        '/projects/agentyong/current-mobile.png': 'Agent Yong — mobile conversation entry screen, captured October 2026.',
        '/projects/agentyong/current-home.png': 'Agent Yong — conversation entry screen with quick-question prompts, captured October 2026.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>While designing my portfolio, I found that different visitors wanted different parts of my background. A recruiter might look for career history, an engineering manager for architecture decisions, and a collaborator for product thinking. A static page presents the same sequence to everyone. I wanted visitors to ask their own questions and follow the details relevant to them. At the same time, I was learning AI agent development, making this a practical product to build around a real communication problem.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <p>Agent Yong is a conversational portfolio for recruiters, hiring managers and collaborators. Visitors can explore my professional experience, projects, technical skills and product decisions through natural dialogue.</p>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Guided first questions:</strong> Preset prompts such as an introduction, project showcase and PM/technical background help a visitor start without composing a question from scratch.</li>
            <li><strong>Follow-up exploration:</strong> Conversation messages provide context for questions that dig further into a project or experience.</li>
            <li><strong>Document-grounded answers:</strong> An indexed knowledge collection gives the agent access to full records about my work.</li>
            <li><strong>Responsive, multilingual interaction:</strong> A mobile-friendly interface streams responses, with instructions for the agent to reply in the visitor's language.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Start from visitor intent:</strong> Organize the entry prompts around what an evaluator wants to learn, then let the conversation branch into specific evidence.</li>
            <li><strong>Keep knowledge reviewable:</strong> Markdown records hold the detailed facts. An index describes where to look, separating navigation summaries from the material used to answer.</li>
            <li><strong>Use retrieval suited to the content:</strong> A small, curated portfolio can be navigated through a document index and a reading tool without maintaining an embedding pipeline.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently owned the product concept, interaction design, responsive frontend, server-side chat route, agent/tool architecture, knowledge records, deployment and maintenance. This connected the product question — how a visitor explores my background — to the engineering question of how an agent finds the right supporting record.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Application:</strong> Next.js 16 App Router, React 19 and TypeScript separate the client conversation interface from the server-side chat API.</li>
            <li><strong>Agentic retrieval:</strong> The LangChain agent receives a prompt-injected knowledge index and uses a single <code>knowledgeReader</code> tool to read selected Markdown documents on demand. It can read multiple records for one question.</li>
            <li><strong>Tool boundary:</strong> Zod validates path input; resolved paths and symlinks are checked so the tool only reads Markdown inside the knowledge directory.</li>
            <li><strong>Model and streaming:</strong> OpenRouter provides model access, while the Vercel AI SDK bridges the LangChain response stream to the interface. Tailwind CSS v4 supports the responsive layout.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcomes</h2>
        <p>I delivered a working alternative way to explore my portfolio. Classmates' interest in Agent Yong helped inspire NovaAgent, extending a personal assistant into a platform for other creators. Agent Yong was confirmed running in September 2026, with a further implementation update that month.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Trade-offs &amp; Current Status</h2>
        <p>This is file-based agentic retrieval: relevance depends on selecting suitable documents from the index. There are no embeddings, vector database or similarity search. Prompt instructions encourage retrieval but do not force a tool call on every turn, so responses still need careful factual evaluation. The application runs separately from this portfolio and links visitors back to it.</p>
    `,
};
