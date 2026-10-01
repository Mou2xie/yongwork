import type { IProjectContent } from './IProjectContent';

export const tendermaster: IProjectContent = {
    id: 305,
    projectName: 'Tender Master',
    description:
        'AI-assisted Python workflow that turns an outline into reviewed tender-document drafts',
    role: 'Python Developer · AI Workflow Designer',
    status: 'Delivered',
    teamSize: 1,
    timeline: 'Mar 2026',
    scopeNote:
        'Independently designed and implemented as a custom client delivery. This is a CLI tool; no frontend was built and no public repository is published.',
    links: [],
    image: [],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            A bidding consultancy drafting government project proposals faced three compounding problems: strict and compressed deadlines, a shortage of writers fluent in procurement terminology and evaluation criteria, and inconsistent quality across whoever was available. <br><br>
            <strong>The Opportunity:</strong> Automate the drafting, checking and assembly stages so specialist writers spend their time on judgement rather than on producing a first pass.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            The client's internal bid-writing staff — operators comfortable in a terminal who needed throughput on long, formally structured Chinese tender documents, not a graphical product.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Contribution</h2>
        <p>
            I independently implemented the entire tool: the LangGraph workflow, the planner / writer / quality-checker roles, the Pydantic contracts, the structured JSON artifacts, the feedback-driven retry loop and the python-docx output. I also made the deliberate decision to ship no user interface.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">How It Works</h2>
        <p>
            A hierarchical Markdown outline (<code>menu.md</code>) is decomposed into leaf sections. Each section receives a generated writing plan, then a drafting pass, then an independent quality check against a seven-dimension rubric. A failed chapter is returned to the writer with specific feedback and previous content so it can be revised rather than blindly regenerated. Passing chapters are persisted as JSON and finally assembled into a formatted <code>.docx</code> with the original heading hierarchy restored.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Orchestration:</strong> LangGraph <code>@task</code> and <code>@entrypoint</code> primitives organise planning, writing and checking into explicit stages with a branching retry loop.</li>
                <li><strong>Model access:</strong> LangChain with <code>langchain-openrouter</code>, so provider and model can be swapped by configuration rather than code.</li>
                <li><strong>Contracts:</strong> Pydantic v2 models define the inter-agent boundary — a nine-field <code>Plan</code>, a four-field chapter output, and a binary pass/fail check result with feedback — and validate structured model output at runtime.</li>
                <li><strong>Document generation:</strong> <code>python-docx</code> assembles headings at levels 1–9, with a custom Chinese numeral parser for correct ordering and heading de-duplication.</li>
                <li><strong>Inspectability:</strong> All planning data and generated chapters persist as JSON, which makes debugging and partial reruns possible.</li>
                <li><strong>Tooling:</strong> Python ≥3.11 with <code>uv</code> for dependency management.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Outcomes</h2>
        <p>
            Delivered to the client as a working internal tool. The pipeline produces a formatted Word draft for human review before any submission.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Trade-offs & Current Status</h2>
        <p>
            Chapters are generated sequentially. Parallel generation and per-chapter-type specialised checkers are possible directions, but they are not implemented. Retry limits are configurable; the exact terminal behaviour when a chapter still fails after exhausting them is not established. Most importantly, prompt instructions and schema validation do not by themselves guarantee regulatory compliance, factual correctness, or acceptance of a bid — the output is a draft for a human, and no measured turnaround or win-rate improvement is claimed.
        </p>
    `,
};
