import type { IProjectContent } from './IProjectContent';

/**
 * Supplementary record.
 *
 * This is the earlier n8n workflow automation, retained as its own project.
 * It is NOT the same system as `Tender Master` (id 305), which is an
 * independently implemented Python/LangGraph CLI tool. See
 * docs/execution/decision-log.md (D-01).
 *
 * Wording note: earlier versions of this record claimed "100% compliance",
 * million-word parallel output, ROI tracking and a significantly increased
 * probability of winning tenders. Those are not supported by the Facts library
 * and have been removed. What remains is the workflow's actual construction.
 */
export const tendermaker: IProjectContent = {
    id: 300,
    projectName: 'n8n Tender Document Generator',
    description: 'n8n workflow that drafts tender documents from an outline',
    role: 'Workflow Designer · Automation Developer',
    status: 'Delivered',
    teamSize: 1,
    scopeNote:
        'An n8n automation workflow, distinct from the later Tender Master CLI tool. No public repository or product link exists for this workflow.',
    links: [],
    image: ['/projects/tendermaker/1.png'],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Workflow Overview</h2>
        <p>
            An n8n automation project that turns raw project background and tender requirements into a structured bidding document. It combines multi-model LLM orchestration with data processing: the input is tender context, and the output is a formatted proposal document delivered through an automated email pipeline.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Process Introduction</h2>
        <p>
            <strong>1. Outline generation and logic branching:</strong> The workflow begins with an outline module that uses a <strong>Switch node</strong> to route logic by project type — Service, Goods or Engineering. An AI agent reads the scoring criteria and produces a structured Markdown index several tiers deep.
        </p>
        <p>
            <strong>2. Section generation:</strong> A <strong>Code node</strong> parses the index into terminal leaf sections and dispatches them as parallel AI generation threads. Each thread produces roughly a thousand words for its section, and each receives a pre-summarised project background so terminology and positioning stay consistent across independently written sections.
        </p>
        <p>
            <strong>3. Assembly, formatting and recovery:</strong> Sections are aggregated and ordered by a recursive JavaScript routine in the assembly node, rendered to HTML with standardised typography, and dispatched by email. A separate manual recovery workflow allows a single section to be regenerated through a chat interface without rerunning the whole document.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Architecture Highlights</h2>
        <p>
            <strong>Parallel section generation:</strong> The workflow identifies independent branches within a document outline so sections can be written concurrently while still sharing one narrative voice.
        </p>
        <p>
            <strong>Summarised context injection:</strong> Every parallel thread receives the same condensed project summary, which keeps a point made early in the document consistent with one made hundreds of sections later.
        </p>
        <p>
            <strong>Heterogeneous model strategy:</strong> Different models are assigned by role — a stronger reasoning model for planning and context compression, and a high-throughput model for bulk text synthesis — to balance output quality against cost.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Scope & Status</h2>
        <p>
            This record documents the workflow construction only. Prompt instructions and automated assembly do not by themselves guarantee regulatory compliance or acceptance of a bid, and no measured turnaround, win-rate or cost outcome is recorded. The output is a draft for human review.
        </p>
    `,
};
