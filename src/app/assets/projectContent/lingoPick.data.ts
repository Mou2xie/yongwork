import type { IProjectContent } from './IProjectContent';

export const lingoPick: IProjectContent = {
    id: 1,
    projectName: 'LingoPick',
    description: 'AI vocabulary browser extension with a premium membership offering',
    role: 'Independent Developer',
    status: 'Discontinued',
    teamSize: 1,
    scopeNote:
        'An earlier product experiment built on top of Transider. Development and operation have stopped; it is retained as a product case study, not as a current product.',
    links: [
        {
            channel: 'figma',
            url: 'https://www.figma.com/design/MVUYNNXyCxGtkKeYwp8iD9/LingoPick?t=TtZ4JawvWOxnaYH5-1',
        },
        { channel: 'github', url: 'https://github.com/Mou2xie/lingoPick_public' },
        { channel: 'website', url: 'https://www.lingopick.net/' },
    ],
    image: [
        '/projects/lingopick/1.png',
        '/projects/lingopick/2.png',
        '/projects/lingopick/3.png',
        '/projects/lingopick/4.png',
        '/projects/lingopick/5.png',
    ],
    imageCaptions: {
        '/projects/lingopick/1.png': 'LingoPick historical interface — reading with the translation side panel.',
        '/projects/lingopick/2.png': 'LingoPick historical interface — a saved word with sentence context.',
        '/projects/lingopick/3.png': 'LingoPick historical interface — flashcard review.',
        '/projects/lingopick/4.png': 'LingoPick historical interface — membership login.',
        '/projects/lingopick/5.png': 'LingoPick historical interface — membership and account page.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>LingoPick extended the vocabulary-learning workflow I had built in <a href="/detail/3" class="text-accent underline underline-offset-4">Transider</a>. The core audience remained people learning English while browsing, but this experiment added contextual AI translation, flashcard review and a paid membership offering. It explored how a focused free extension could become a broader learning product with premium functionality.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Context-aware AI translation:</strong> Look up English words in the context of the page being read; the historical product offering supported translation into 33 languages.</li>
            <li><strong>Vocabulary collection:</strong> Keep a private word bank with surrounding sentences for later review.</li>
            <li><strong>Flashcards:</strong> Revisit collected vocabulary through a dedicated review interface.</li>
            <li><strong>Premium membership:</strong> Gumroad integration and licence validation enable access to paid features.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <p>I retained the reading-to-collection journey from <a href="/detail/3" class="text-accent underline underline-offset-4">Transider</a> and extended it into translation, review and membership. Using Gumroad kept payments and licence validation within an existing platform. Separate translation-provider services gave the implementation a place to integrate Gemini and DeepSeek without coupling each provider directly to the interface.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently built the extension and its complete premium membership functionality, including Gumroad integration. My scope covered product/interface design and the implementation that connected AI translation, vocabulary collection, review and paid access.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Extension:</strong> WXT, React 19, TypeScript and Vite, styled with Tailwind CSS v4 and DaisyUI.</li>
            <li><strong>AI services:</strong> Google Gemini through <code>@google/genai</code> and DeepSeek through the OpenAI SDK, with dedicated translation-provider logic.</li>
            <li><strong>Data and membership:</strong> Supabase PostgreSQL and Auth, localforage, use-immer, and separate database and licence-validation services.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcome &amp; Product Learning</h2>
        <p>I implemented the premium membership offering, but product performance was weak and I stopped development and operation. The experience gave me practical exposure to moving from a free utility to a paid product, and to making a stop/continue decision after delivery. The case study records that experiment without attributing its outcome to an untested explanation.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Trade-offs &amp; Current Status</h2>
        <p>LingoPick is discontinued. Its historical interface is shown in the gallery. Flashcards were implemented; a spaced-repetition algorithm and a React Native companion remained roadmap ideas.</p>
    `,
};
