import type { IProjectContent } from "./IProjectContent";

export const transider: IProjectContent = {
    id: 3,
    projectName: 'Transider',
    description: 'Free En-Ch in-page translator',
    links: [
        { channel: 'figma', url: 'https://www.figma.com/design/L22X0kY1g8xSfvKqbnzjdF/Transider?t=FY3SlpVQxFMVtaLU-1' },
        { channel: 'github', url: 'https://github.com/Mou2xie/Transider_v2' },
        { channel: 'website', url: 'https://chromewebstore.google.com/detail/transider%E2%80%94%E2%80%94%E9%9A%8F%E6%89%8B%E8%AE%B0%E5%8D%95%E8%AF%8D/iepaohcnkdejgafdmdifpepgpdbphhlo?hl=zh-CN&utm_source=ext_sidebar' },
    ],
    image: [],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Product Designer & Developer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Language learners often face a "Context Gap." Traditional translation tools provide isolated definitions, leading to rote memorization that fades quickly because the learner loses the connection to how the word was actually used.<br><br>
            <strong>The Opportunity:</strong> To build a tool that captures the "moment of curiosity"—saving not just the word, but the surrounding sentence and source URL—transforming passive reading into active, context-rich learning.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Self-directed language learners who immerse themselves in native web content (articles, blogs) and require a tool that builds vocabulary naturally without interrupting their reading flow.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Side Panel vs. Popup:</strong> I deliberately chose the Chrome Side Panel API over traditional popups. This allows the dictionary to coexist alongside the article, eliminating the "context switching" fatigue caused by constant overlay toggling.</li>
                <li><strong>Context-Centric Data:</strong> The system enforces saving the <em>source sentence</em> with every word. This product decision shifts the focus from simple translation to "usage understanding."</li>
                <li><strong>Ecosystem Integration:</strong> Recognizing that learners use multiple tools, I implemented an Excel (.xlsx) export feature, allowing users to easily migrate their data to spaced-repetition apps like Anki.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            I navigated the complexities of Manifest V3 to build a modern, performant extension:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Architecture:</strong> Built using <strong>WXT</strong> and <strong>React 19</strong>. This ensured a type-safe development environment and streamlined the complex build processes required for modern browser extensions.</li>
                <li><strong>State Management:</strong> Implemented <strong>Zustand</strong> to manage the global UI state within the side panel, handling pagination and view transitions efficiently.</li>
                <li><strong>Data Persistence Strategy:</strong> Adopted a "Local-First" approach using <strong>LocalForage</strong> (IndexedDB wrapper) for user data to ensure privacy and offline capability, while utilizing <strong>Supabase</strong> solely for querying dictionary definitions.</li>
                <li><strong>MV3 Communication:</strong> Integrated <strong>webext-bridge</strong> to handle typed, reliable message passing between the ephemeral Service Workers (background) and Content Scripts.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Performance Optimization:</strong> To protect the user's browsing experience, I optimized DOM event listeners for the "double-click" detection and offloaded heavy dictionary fetching operations to the Side Panel, keeping the Content Script lightweight.</li>
                <li><strong>Robust Engineering:</strong> Successfully solved the challenge of Service Worker lifecycles in Manifest V3, ensuring consistent behavior even when the background script goes dormant.</li>
            </ul>
        </p>
    `
}