import type { IProjectContent } from "./IProjectContent";

export const lingoPick: IProjectContent = {
    id: 1,
    projectName: 'LingoPick',
    description: 'AI-powered Word Translator & Vocabulary Builder',
    links: [
        { channel: 'figma', url: 'https://www.figma.com/design/MVUYNNXyCxGtkKeYwp8iD9/LingoPick?t=TtZ4JawvWOxnaYH5-1' },
        { channel: 'github', url: 'https://github.com/Mou2xie/lingoPick_public' },
        { channel: 'website', url: 'https://www.lingopick.net/' },
    ],
    image: [],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Product Manager && Full-stack Developer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Context is critical for language retention, yet traditional vocabulary apps often isolate words, leading to rote memorization that fades quickly. Learners frequently encounter new terms while browsing the web but lack a tool to capture them instantly without breaking their reading flow. <br><br>
            To leverage Generative AI (LLMs) to provide context-aware definitions in real-time, bridging the gap between passive reading and active vocabulary acquisition.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Intermediate to advanced language learners who regularly consume native web content (news, blogs, articles) and want to naturally grow their vocabulary without disrupting their reading experience.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Context-First Philosophy:</strong> Decided to mandate saving the <em>surrounding sentence</em> alongside the target word. This ensures users learn how words function syntactically, not just their dictionary definitions.</li>
                <li><strong>Non-Intrusive UX:</strong> Designed the interaction as a floating, on-demand popup. This minimizes friction, ensuring the tool supports the reading habit rather than competing for attention.</li>
                <li><strong>AI-Driven Content:</strong> Instead of rigid static dictionaries, I integrated LLMs (Gemini & DeepSeek) to generate dynamic examples and collocations tailored to the specific context of the article.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            I built this project using a modern, type-safe stack optimized for performance and maintainability:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Extension Architecture:</strong> Developed using <strong>WXT</strong> (Next-gen Web Extension Framework), <strong>React 19</strong>, and <strong>TypeScript</strong> for a robust frontend experience.</li>
                <li><strong>Backend & Sync:</strong> Utilized <strong>Supabase</strong> for PostgreSQL storage and Authentication, enabling secure cloud synchronization of vocabulary across devices.</li>
                <li><strong>AI Integration:</strong> Engineered a <code>TranslationService</code> capable of switching between <strong>Google Gemini</strong> and <strong>DeepSeek</strong>. I implemented structured prompt engineering to force deterministic JSON outputs from the LLMs for consistent UI rendering.</li>
                <li><strong>Styling:</strong> Implemented <strong>TailwindCSS v4</strong> and DaisyUI for a lightweight, zero-runtime overhead design system.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Service-Oriented Logic:</strong> To ensure scalability, I decoupled business logic from UI components. Specialized services (e.g., <code>DatabaseService</code>, <code>LicenceValidationService</code>) handle distinct responsibilities.</li>
                <li><strong>Commercial Integration:</strong> Demonstrated product viability thinking by integrating <strong>Gumroad</strong> license validation to gate premium features.</li>
                <li><strong>Performance Optimization:</strong> Implemented <strong>LocalForage</strong> and <strong>use-immer</strong> to cache user settings locally and manage immutable state, minimizing unnecessary network requests and latency.</li>
            </ul>
        </p>
    `
}