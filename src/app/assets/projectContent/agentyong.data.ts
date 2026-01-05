import type { IProjectContent } from "./IProjectContent";

export const agentyong: IProjectContent = {
    id: 303,
    projectName: 'Agent Yong',
    description: 'My online digital twin, 7*24 available for chatting ',
    links: [
        { channel: 'github', url: 'https://github.com/Mou2xie/agent_me' },
        { channel: 'website', url: 'https://www.agentyong.chat/' },
    ],
    image: ['/projects/agentyong/1.png', '/projects/agentyong/2.png'],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>Product Manager and Developer</p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>The traditional job application process is often a "black box" where static resumes fail to convey a candidate's personality or deep problem-solving logic. Recruiters face "information overload," while candidates struggle to stand out. I identified an opportunity to disrupt this static experience by creating a <strong>Digital Twin</strong>. Agent Me transforms my professional profile into an interactive dialogue, providing a low-friction way for hiring managers to vet my skills and build trust through real-time engagement.</p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>The primary audience consists of <strong>recruiters, hiring managers, and technical leads</strong> who are looking for a more immersive way to evaluate a candidate’s fit. By interacting with the agent, they can explore my technical depth and product thinking on their own terms, turning a passive document-reading task into an active, conversational exploration.</p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>1) <strong>Trust over Talk:</strong> I decided to implement a <strong>Tool-Use architecture</strong> rather than relying on pure LLM generation. This ensures the agent only provides "hallucination-free" answers based on my actual project files and resume. 
        2) <strong>Performance First:</strong> I chose <strong>Gemini Flash</strong> via OpenRouter to balance high-level reasoning with extremely low latency, ensuring the recruiter’s experience is snappy and responsive. 
        3) <strong>Mobile-First Accessibility:</strong> Recognizing that many recruiters browse profiles on the go, I prioritized a responsive Tailwind-based design to ensure a seamless experience across all devices.</p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>The project is built with a modern, performance-oriented stack:
        - <strong>Frontend:</strong> Next.js 15 (App Router) and TypeScript for a robust, type-safe user interface.
        - <strong>AI Orchestration:</strong> LangChain.js and Vercel AI SDK to manage the dialogue flow and tool-calling logic.
        - <strong>Data Integration:</strong> A RAG-inspired system where the agent calls specific functions (e.g., <code>getMyWorkExperience</code>) to fetch structured data from Markdown files.
        - <strong>Validation:</strong> Zod for strict schema validation of AI outputs and API responses.</p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>Agent Me is more than a chatbot; it is a <strong>living proof of concept</strong> of my ability to build full-stack AI applications. It successfully demonstrates high-cohesion design and the practical application of Agentic workflows. By solving the "engagement problem" in recruitment, this project showcases my dual-competency in identifying user pain points and executing technical solutions that solve them.</p>
    `
}