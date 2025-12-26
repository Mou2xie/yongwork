import type { IProjectContent } from "./IProjectContent";

export const HuLandscaping: IProjectContent = {
    id: 8,
    projectName: 'Hu-Landscaping',
    description: 'Landscaping company landing page',
    links: [
        { channel: 'figma', url: 'https://www.figma.com/design/VyjIEhZKMRNYoA5QdTI1Kd/Hu-landscaping?t=bwrDn0Q8boYFOwXn-1' },
        { channel: 'github', url: 'https://github.com/Mou2xie/Hu_landscaping' },
        { channel: 'website', url: 'https://hu-landscaping.vercel.app/' },
    ],
    image: ['/projects/hu-landscaping/1.png', '/projects/hu-landscaping/2.png', '/projects/hu-landscaping/3.png', '/projects/hu-landscaping/4.png'],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Full-stack Developer & Digital Strategist
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Local service businesses often struggle to translate physical craftsmanship into a digital presence. Generic templates fail to build the necessary trust for high-ticket services, leaving potential clients unsure about quality and reliability.<br><br>
            <strong>The Opportunity:</strong> To build a bespoke, performance-driven platform that acts not just as an informational brochure, but as a conversion tool that actively bridges the "Trust Gap" through visual proof and credibility signals.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Homeowners seeking reliable, high-end landscaping services who require visual validation of workmanship and frictionless communication channels before booking a consultation.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Trust Engineering:</strong> I designed the UI to prominently feature "Trust Indicators" (Licensed, Insured badges) and localized testimonials. This reduces user anxiety and establishes immediate credibility.</li>
                <li><strong>Visual-First Architecture:</strong> Landscaping is purely visual. I implemented a high-performance interactive carousel to showcase "Before & After" transformations, ensuring the portfolio is the center of the user experience.</li>
                <li><strong>Direct-Response UX:</strong> Simplified the contact flow to minimize friction. Instead of complex forms, the design prioritizes immediate action (Click-to-Call, Email) to maximize lead generation.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            I adopted a "bleeding-edge" stack to maximize performance and developer experience:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Framework:</strong> Built with <strong>Nuxt 4</strong>, utilizing the latest advancements in the Vue meta-framework for superior server-side rendering (SSR) and SEO performance.</li>
                <li><strong>Styling:</strong> Early adoption of <strong>Tailwind CSS v4</strong> via the next-gen Vite plugin, achieving lightning-fast Hot Module Replacement (HMR) and a minimal CSS bundle size.</li>
                <li><strong>UI Components:</strong> Leveraged <strong>Nuxt UI</strong> for accessible, pre-built components (like the Portfolio Carousel) while maintaining full aesthetic control.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Performance Optimization:</strong> Image-heavy sites can be slow. I implemented aggressive lazy loading strategies and component abstraction to prioritize Largest Contentful Paint (LCP), ensuring the site loads instantly even on mobile networks.</li>
                <li><strong>Adaptability:</strong> Successfully navigated the challenges of using Nuxt 4 and Tailwind v4 in their early stages, demonstrating the ability to learn and adapt to new technologies without relying on established community patterns.</li>
            </ul>
        </p>
    `
}