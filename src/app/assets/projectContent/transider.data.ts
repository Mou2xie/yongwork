import type { IProjectContent } from './IProjectContent';

export const transider: IProjectContent = {
    id: 3,
    projectName: 'Transider',
    description:
        'Chrome extension for context-aware translation and personal vocabulary building',
    role: 'Indie Developer · Full-Stack Engineer',
    status: 'Production',
    teamSize: 1,
    timeline: 'Dec 2023 – Present',
    scopeNote:
        'Independently designed, built, published and maintained, including the extension architecture, interaction design and release.',
    links: [
        {
            channel: 'figma',
            url: 'https://www.figma.com/design/L22X0kY1g8xSfvKqbnzjdF/Transider?t=FY3SlpVQxFMVtaLU-1',
        },
        { channel: 'github', url: 'https://github.com/Mou2xie/Transider_v2' },
        {
            channel: 'website',
            url: 'https://chromewebstore.google.com/detail/transider%E2%80%94%E2%80%94%E9%9A%8F%E6%89%8B%E8%AE%B0%E5%8D%95%E8%AF%8D/iepaohcnkdejgafdmdifpepgpdbphhlo?hl=zh-CN&utm_source=ext_sidebar',
        },
    ],
    image: [
        '/projects/transider/2.png',
        '/projects/transider/3.png',
    ],
    imageCaptions: {
        '/projects/transider/2.png': 'Historical Chrome Web Store graphic showing the Transider lookup side panel.',
        '/projects/transider/3.png': 'Historical Chrome Web Store graphic showing the Transider vocabulary notebook.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>Transider began as a tool for my own English learning. I wanted to read English articles, look up unfamiliar words and keep useful vocabulary without switching between tools. Existing options felt too complex or put features behind a paywall. A standalone definition also loses an important part of learning: the sentence in which I encountered the word and the article I could return to. The target user is a language learner who wants vocabulary collection to fit naturally into online reading.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <p>I built a Chrome extension that keeps contextual lookup and a personal vocabulary notebook alongside the original webpage.</p>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>In-page capture:</strong> Double-click an unfamiliar word to look it up with its surrounding sentence.</li>
            <li><strong>Reading side panel:</strong> View translation and vocabulary information while keeping the article open.</li>
            <li><strong>Personal notebook:</strong> Save words with sentence context, review them through pagination, play pronunciation and return to the source link.</li>
            <li><strong>Learning preferences:</strong> Configure auto-save behavior and side-panel controls.</li>
            <li><strong>Data portability:</strong> Export the vocabulary collection as an Excel file for use outside the extension.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Preserve the reading context:</strong> Capture the word, surrounding sentence and source page together, so review can revisit actual usage.</li>
            <li><strong>Use the browser as the workspace:</strong> A side panel places lookup beside the article instead of making a separate application the center of the journey.</li>
            <li><strong>Separate dictionary data from personal vocabulary:</strong> Supabase supplies dictionary entries; the learner's saved collection lives locally in the browser.</li>
            <li><strong>Keep the collection portable:</strong> Excel export makes the vocabulary useful beyond this one tool.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently designed, built, published and maintained the extension. My scope covers the product and interface design, content-script interactions, side-panel UI, vocabulary workflow, persistence, cross-context messaging and Chrome Web Store release. Transider was my first independently developed and publicly released software product.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Extension architecture:</strong> WXT, React 19 and TypeScript target Chrome Manifest V3 with content scripts, a service worker and the Side Panel API.</li>
            <li><strong>Context extraction:</strong> Content scripts detect words, extract source sentences and render highlighted vocabulary in context.</li>
            <li><strong>State and communication:</strong> Zustand manages UI state including pagination; <code>webext-bridge</code> provides typed messaging between content scripts and the service worker.</li>
            <li><strong>Persistence:</strong> <code>localforage</code> over IndexedDB and extension runtime storage support the local vocabulary workflow. Supabase PostgreSQL is the dictionary data source.</li>
            <li><strong>Export:</strong> <code>xlsx</code> assembles the Excel vocabulary file. The interface uses CSS.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcomes</h2>
        <p>Transider was published to the Chrome Web Store and recorded <strong>1,100+ monthly active users in the August 2026 reporting context</strong>, according to the Chrome Web Store Developer Dashboard. I continue to iterate on and operate it. Its vocabulary workflow also became the foundation for the later LingoPick experiment.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Trade-offs &amp; Current Status</h2>
        <p>Local persistence lets users retain and review saved vocabulary without depending on a vocabulary server, but does not provide cross-device synchronization. Dictionary requests still rely on the remote data source. The extension also has to coordinate separate browser contexts under the Manifest V3 service-worker lifecycle.</p>
    `,
};
