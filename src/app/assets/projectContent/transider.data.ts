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
        '/projects/transider/1.png',
        '/projects/transider/2.png',
        '/projects/transider/3.png',
        '/projects/transider/4.png',
        '/projects/transider/5.png',
    ],
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Indie Developer &amp; Full-Stack Engineer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Language learners reading online hit a "context gap": translation tools return isolated definitions, so the connection to how the word was actually used is lost within minutes. <br><br>
            <strong>The Opportunity:</strong> Capture the moment of curiosity — save the word together with the sentence and the source page — turning passive reading into active, context-rich learning without interrupting the reading flow.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Self-directed learners who read native English content regularly and want vocabulary to accumulate naturally as a side effect of reading, rather than as a separate study session.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Side panel instead of a popup:</strong> I deliberately used the Chrome Side Panel API so the vocabulary list can sit alongside the article. A popup forces the reader to toggle an overlay, which creates context-switching fatigue.</li>
                <li><strong>Context is mandatory, not optional:</strong> The system stores the source sentence with every word, shifting the product from "what does this mean" to "how is this used".</li>
                <li><strong>Local-first storage:</strong> Saved vocabulary lives in the browser rather than on a server, which keeps the user's reading history private and the tool usable offline.</li>
                <li><strong>No lock-in:</strong> An Excel (.xlsx) export lets users move their collection into spaced-repetition tools such as Anki instead of trapping it in the extension.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Architecture:</strong> Manifest V3 with a content script, a service worker and a Side Panel UI, built with <strong>WXT</strong>, React 19 and TypeScript.</li>
                <li><strong>Content interaction:</strong> Double-click word detection, sentence-level context extraction and highlighted word rendering inside the page's content scripts.</li>
                <li><strong>State:</strong> Zustand manages Side Panel UI state, including pagination and view transitions.</li>
                <li><strong>Storage split:</strong> <code>localforage</code> over IndexedDB persists the user's vocabulary locally for offline capability, while Supabase is queried only for dictionary data — saved words are never written to the cloud.</li>
                <li><strong>Messaging:</strong> <code>webext-bridge</code> provides typed, reliable message passing between the ephemeral service worker and content scripts.</li>
                <li><strong>Export:</strong> Vocabulary export through <code>xlsx</code> (SheetJS).</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Outcomes</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li>My first independently developed and publicly released software product, published to the Chrome Web Store.</li>
                <li><strong>1,100+ monthly active users</strong> in the August 2026 reporting context, from the Chrome Web Store Developer Dashboard.</li>
                <li>Continues to be iterated and operated.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Trade-offs & Current Status</h2>
        <p>
            The trickiest engineering constraint was Manifest V3's service-worker lifecycle: the background script can go dormant at any time, so message passing and dictionary fetches had to tolerate a cold worker rather than assume a live connection. Keeping dictionary fetching off the content script also protects the host page's performance, at the cost of a round trip when the side panel opens.
        </p>
    `,
};
