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
    content: `
        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Independent Developer — product, design and implementation
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Transider proved that context-aware vocabulary capture works, but it was free and unmonetised. The question LingoPick set out to answer was whether the same core idea could support a paid tier. <br><br>
            <strong>The Opportunity:</strong> Extend the free feature set with an AI translation layer and a premium membership, and find out whether users would pay for it.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            The same intermediate-to-advanced learners as Transider, with a subset willing to pay for AI-generated context, flashcards and broader language coverage.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Premium over free:</strong> Rather than shipping a second free tool, I built the complete premium membership experience on top of Transider's free feature set — the commercially interesting question.</li>
                <li><strong>Payments via Gumroad:</strong> I integrated Gumroad licence validation to gate premium functionality, which avoided building billing infrastructure for an experiment.</li>
                <li><strong>Provider-agnostic AI:</strong> Translation is abstracted behind a service that can switch between Google Gemini and DeepSeek, so model choice is a configuration decision rather than a rewrite.</li>
                <li><strong>Context-first, again:</strong> Saving the surrounding sentence alongside the word remained mandatory — the lesson carried over from Transider.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Extension:</strong> WXT, React 19, TypeScript and Vite, targeting Manifest V3.</li>
                <li><strong>AI integration:</strong> A <code>TranslationService</code> switching between Google Gemini (<code>@google/genai</code>) and DeepSeek via the OpenAI SDK, with structured prompt engineering to force deterministic JSON output for consistent UI rendering.</li>
                <li><strong>Backend:</strong> Supabase PostgreSQL for word and collection data, with Supabase Auth.</li>
                <li><strong>Service separation:</strong> Business logic was decoupled from UI components into dedicated services (including database and licence validation) so responsibilities stayed testable and separable.</li>
                <li><strong>Styling:</strong> Tailwind CSS v4 with DaisyUI.</li>
                <li><strong>Local performance:</strong> <code>localforage</code> for local caching of user settings and <code>use-immer</code> for immutable state updates.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Outcome & What I Learned</h2>
        <p>
            LingoPick shipped with working premium membership functionality, but product performance was weak and I stopped development and operation. The useful outcome is the lesson: a paid tier on top of an existing free tool needs a reason to exist that users can feel, and adding AI and flashcards was not enough to create one. It is documented here as a product experiment rather than a current product.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Boundaries</h2>
        <p>
            This case describes implemented functionality only. No paying-customer count, subscription-billing mechanics, revenue or cross-device synchronisation of the personal vocabulary bank is claimed.
        </p>
    `,
};
