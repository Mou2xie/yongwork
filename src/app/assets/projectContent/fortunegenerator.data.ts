import type { IProjectContent } from "./IProjectContent";

export const fortunegenerator: IProjectContent = {
    id: 301,
    projectName: 'n8n Fortune Generator',
    description: 'Generate fortunes for users of horoscopechinois.today',
    links: [],
    image: [],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Workflow Overview</h2>
<p>The Fortune Generator is a sophisticated automated pipeline designed to bridge traditional Chinese horoscopes with modern lifestyle content. It solves the challenge of generating high-volume, structured, and stylistically consistent editorial content by leveraging LLMs. The workflow takes user-defined date ranges and scopes (daily, weekly, monthly, or yearly) as input and outputs fully validated, multi-dimensional fortune data directly into a Supabase database for application consumption.</p>

<h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Process Introduction</h2>
<p class="mt-3"><strong>1. Multi-Dimensional Trigger & Data Preparation:</strong> The process initiates via an <strong>On form submission</strong> node, capturing user parameters. Simultaneously, the <strong>Date Generator</strong> (JS-based) calculates and aligns UTC dates based on the requested scope, while the <strong>Zodiac Provider</strong> injects a static array of unique Zodiac IDs and names, ensuring all twelve signs are processed for the given timeframe.</p>

<p class="mt-3"><strong>2. Intelligent Orchestration & AI Synthesis:</strong> Data streams are synchronized through a <strong>Merge</strong> node and passed to the <strong>AI Agent</strong>. This agent utilizes the <strong>OpenRouter Chat Model (GPT-4o-mini)</strong> and a <strong>Structured Output Parser</strong>. The core logic involves a complex system prompt that enforces a specific French editorial tone and strict length requirements (300+ words per detail) while adhering to a rigorous JSON Schema for five distinct fortune categories.</p>

<p class="mt-3"><strong>3. Data Normalization & Persistence:</strong> Once the AI generates the content, the <strong>Output Format Changer</strong> executes custom JavaScript to flatten and clean the nested JSON structure. This ensures the payload is compatible with the backend schema before the <strong>Supabase (Create a row)</strong> node performs bulk insertion, making the poetic fortunes instantly available to the end-user platform.</p>

<h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Architecture Highlights</h2>
<p>The system features a robust <strong>Schema-First Design</strong>, utilizing a Structured Output Parser to guarantee 100% JSON compliance for seamless API integration. It implements <strong>Complex Temporal Logic</strong> via custom JS nodes to handle UTC date alignment for different calendar scopes (weeks, months, years). Additionally, the <strong>Advanced Prompt Engineering</strong> strategy employs specific persona constraints and length-checks, ensuring the AI performs not just as a translator, but as a high-end lifestyle editor capable of generating long-form, evocative content.</p>
    `
}