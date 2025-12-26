import type { IProjectContent } from "./IProjectContent";

export const tendermaker: IProjectContent = {
    id: 300,
    projectName: 'n8n Tender Document Generator',
    description: 'AI workflow to generate tender document',
    links: [],
    image: ['/projects/tendermaker/1.png'],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Workflow Overview</h2> <p>The Enterprise-Grade Bidding Document Synthesis System is a bespoke n8n automation project designed to generate professional, high-volume proposals. By integrating multi-model LLM orchestration with complex data processing, this system allows clients to transform raw project backgrounds into meticulously structured bidding documents. The input consists of tender requirements and project context, while the output is a fully formatted, professional proposal delivered via an automated email pipeline.</p>

<h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Business Value & Strategic Delivery</h2> <p>As a custom-developed solution already in production, this system has fundamentally optimized the client's competitive capacity. By automating the most labor-intensive phase of procurement, the client can now bid on a significantly higher volume of projects simultaneously without increasing headcount. The project provides total transparency into operational costs through a <strong>Token Usage Query</strong> workflow, which tracks API consumption and ROI for every document generated. This delivery ensures 100% compliance with rigorous government scoring criteria, reducing human error and significantly increasing the probability of winning tenders.</p>

<h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Process Introduction</h2> <p><strong>1. Intelligent Outline & Logic Branching:</strong> The workflow begins with the <strong>"Outline Generation"</strong> module, utilizing a <strong>Switch node</strong> to categorize logic based on "Service," "Goods," or "Engineering" project types. An AI Agent analyzes scoring criteria to generate a professional Markdown index with a depth of 4 to 6 tiers.</p>

<p><strong>2. Million-Word Scale Parallel Production:</strong> The <strong>"Full Document Generation"</strong> engine uses a <strong>Code node</strong> to parse the index into terminal "leaf nodes". This architecture supports the generation of <strong>million-word scale documents</strong> by triggering massive parallel AI threads. Each thread, powered by <strong>Gemini-2.5-Flash</strong>, generates approximately 1,000 words per section, maintaining strict contextual consistency by referencing a pre-summarized project background across the entire document.</p>

<p><strong>3. Assembly, Formatting & Fallback:</strong> Sections are aggregated and sorted using a recursive JS algorithm in the <strong>"Assemble Doc"</strong> node. The text is then rendered into professional <strong>HTML</strong> with standardized typography and dispatched via <strong>SMTP</strong>. For critical reliability, a <strong>Manual Recovery Workflow</strong> allows for targeted repair of specific sections via a chat interface.</p>

<h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Architecture Highlights</h2> <p><strong>Scalable Parallelism:</strong> The system identifies independent data paths within complex document structures, allowing it to write massive sections concurrently. This enables the production of documents exceeding one million words while preserving a unified narrative voice.</p>

<p><strong>Contextual Synchronization:</strong> Unlike standard AI writing, this system implements a <strong>"Summarized Context Injection"</strong> strategy. Every parallel section-generation thread receives a standardized summary of the project background, ensuring that a point made on page 10 is contextually consistent with page 1,000.</p>

<p><strong>Heterogeneous Model Strategy:</strong> The architecture optimizes performance by utilizing <strong>Claude-3.5</strong> for logical planning, <strong>GPT-4o</strong> for initial context compression, and <strong>Gemini-2.5-Flash</strong> for high-throughput text synthesis, balancing elite intelligence with cost-efficiency.</p>
    `
}