import type { IProjectContent } from "./IProjectContent";

export const keywordsExplainer: IProjectContent = {
    id: 302,
    projectName: 'n8n Google Trends Keywords Tool',
    description: 'Find product idea from Google Trends keywords',
    links: [],
    image: [],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Workflow Overview</h2>
<p>This automated pipeline is engineered to streamline SEO keyword research by transforming raw Google search trend data into actionable marketing insights. It addresses the bottleneck of manual keyword analysis by automating the ingestion of CSV files, performing complex data normalization, and utilizing Large Language Models (LLMs) to interpret user intent. The input is a raw CSV file containing trending keywords and metrics, while the output is a structured, enriched CSV report detailing keyword explanations and psychological search intent.</p>

<h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Process Introduction</h2>
<p class="mt-3"><strong>1. Binary Ingestion and Normalization:</strong> The workflow is initiated via an <strong>On form submission</strong> node, which handles multiple CSV uploads. A custom <strong>Rename file</strong> JavaScript node then standardizes the binary keys to ensure consistent data handling downstream. This is followed by the <strong>Extract from File</strong> node, which converts the binary table data into a JSON format suitable for programmatic manipulation.</p>

<p class="mt-3"><strong>2. Data Transformation and Intelligent Analysis:</strong> The <strong>Data type convertion</strong> node utilizes a specialized JS script to parse localized search volume strings (e.g., handling "万" or "+") into sortable integers. After a <strong>Sort by search volume</strong> operation, the <strong>AI Agent</strong>—powered by <strong>Gemini 2.5 Flash</strong> via OpenRouter—processes each keyword. The agent is governed by a <strong>Structured Output Parser</strong> that enforces a strict JSON Schema to ensure the AI's explanation and intent analysis remain programmatic and reliable.</p>

<p class="mt-3"><strong>3. Serialization and Local Persistence:</strong> Once the AI-generated insights are collected, the <strong>Convert to File</strong> node re-serializes the structured data back into a CSV format. Finally, the <strong>Read/Write Files from Disk</strong> node persists the enriched report to a local directory with a dynamic timestamped filename (explanation_YYYY-MM-DD.csv), completing the data lifecycle.</p>

<h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Architecture Highlights</h2>
<p>The architecture excels through its <strong>Rigid Data Consistency</strong>, employing a JSON Schema-backed Structured Output Parser to prevent "hallucinations" and ensure the AI's response perfectly aligns with the required technical format. It also showcases <strong>Robust Data Pre-processing</strong> via custom JavaScript logic that handles irregular string-based metrics, transforming them into standardized numerical data for accurate sorting and prioritization. Furthermore, the <strong>AI Agent Orchestration</strong> effectively combines a specialized SEO system prompt with a low-latency model to provide high-throughput semantic analysis.</p>
    `
}