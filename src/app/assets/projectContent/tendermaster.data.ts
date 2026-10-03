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
    image: ['/projects/tendermaster/pipeline-animated.gif'],
    imageCaptions: {
        '/projects/tendermaster/pipeline-animated.gif': 'Tender Master animated pipeline — Markdown outline, planning, chapter drafting, quality checks, revision feedback and Word document assembly.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>A bidding consultancy needed support for drafting formal Chinese government-project proposals. Compressed deadlines, scarce specialist writers and uneven writing quality made the workflow difficult to scale. The users were internal bid-writing staff: they needed a structured first draft and a consistent review process that left domain judgment with the people responsible for submission.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <p>I delivered a Python CLI workflow that takes a hierarchical Markdown outline through planning, chapter drafting, automated checking and Word assembly. The output is a formatted draft for human review.</p>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Outline decomposition:</strong> Parse the heading hierarchy into leaf sections that each receive an individual writing plan.</li>
            <li><strong>Specialized roles:</strong> A planner defines objectives and requirements, a writer drafts the section, and a separate checker evaluates it against a seven-dimension rubric.</li>
            <li><strong>Feedback-driven revision:</strong> Failed checks return specific feedback and previous content to the writer, up to configurable retry limits.</li>
            <li><strong>Inspectable artifacts:</strong> Persist plans and chapter output as JSON for inspection, debugging and partial reruns.</li>
            <li><strong>Word delivery:</strong> Restore the original heading hierarchy and assemble chapters into a formatted <code>.docx</code>.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Match the internal workflow:</strong> The client had no graphical-interface requirement. A terminal workflow kept the delivery focused on drafting and document output.</li>
            <li><strong>Separate the stages of writing:</strong> Planning, drafting and checking have different responsibilities. Separate prompts and contracts let each stage be refined independently.</li>
            <li><strong>Make revision specific:</strong> Pass checker feedback and the existing chapter back to the writer so a retry addresses the failed criteria.</li>
            <li><strong>Keep the human handoff explicit:</strong> A Word draft fits the client's review and editing process before a proposal is submitted.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently designed and implemented the workflow as a custom client delivery, covering requirements, iteration and handoff. My engineering scope included LangGraph orchestration, the three agent roles, Pydantic contracts, structured artifacts, the retry loop and document assembly.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Orchestration:</strong> Python ≥3.11 with LangGraph <code>@task</code> and <code>@entrypoint</code> primitives. Chapters move sequentially through the stages, with a branching loop for checking and revision.</li>
            <li><strong>Structured contracts:</strong> Pydantic v2 validates the writing plan, chapter output and pass/fail result with feedback at runtime.</li>
            <li><strong>Model access:</strong> LangChain and <code>langchain-openrouter</code> provide configurable model selection through OpenRouter.</li>
            <li><strong>Document assembly:</strong> <code>python-docx</code> generates heading levels 1–9. Python logic restores parent/child hierarchy, sorts Chinese-numbered headings, removes duplicate headings and normalizes content.</li>
            <li><strong>Tooling:</strong> <code>uv</code> manages dependencies; JSON files preserve intermediate plans and chapters.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcomes</h2>
        <p>Delivered as a working internal tool, Tender Master connects a client's writing requirements to a repeatable planning, drafting, checking and assembly process. The final handoff is an editable Word draft, with intermediate artifacts available for inspection.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Trade-offs &amp; Current Status</h2>
        <p>Sequential chapter generation keeps the workflow explicit but limits throughput; parallel generation remains a possible extension. Automated checks validate structure and apply a writing rubric, while specialist human review remains necessary for factual accuracy and procurement requirements. Tender Master is a delivered CLI tool without a public frontend or repository.</p>
    `,
};
