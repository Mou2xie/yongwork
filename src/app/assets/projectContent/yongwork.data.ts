import type { IProjectContent } from "./IProjectContent";

export const yongwork: IProjectContent = {
    id: 7,
    projectName: 'YongWork',
    description: 'Personal website',
    links: [
        { channel: 'figma', url: 'https://www.figma.com/design/HKqAEOWLkDBUUjbmydAaoP/personal-website?node-id=0-1&t=dDIbl9aanqqBtvbf-1' },
        { channel: 'github', url: 'https://github.com/Mou2xie/yongwork' },
        { channel: 'website', url: 'https://yongxie.dev/' },
    ],
    image: ['/projects/yongwork/1.png', '/projects/yongwork/2.png', '/projects/yongwork/3.png', '/projects/yongwork/4.png', '/projects/yongwork/5.png',],
    content: `
    <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">My Role</h2>
        <p>
            Creator, Product Manager & Engineer
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">The Problem & Opportunity</h2>
        <p>
            Traditional developer portfolios often suffer from the "Gallery Problem"—they are static collections of screenshots that fail to communicate process. Recruiters and hiring managers often miss the context: the trade-offs made, the constraints navigated, and the user value delivered.<br><br>
            <strong>The Opportunity:</strong> To engineer a platform that treats every project as a structured "Product Case Study," enforcing a narrative that highlights problem-solving and market understanding alongside code quality.
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Target Audience</h2>
        <p>
            Recruiters, Engineering Managers, and Product Leaders who are looking for a hybrid talent capable of understanding both the <em>business "why"</em> and the <em>technical "how."</em>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Key Product Decisions</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>"PM Thinking" by Design:</strong> I architected the data model (<code>IProjectContent</code>) to enforce rigor. By making fields like "Target Audience" and "Key Decisions" mandatory in the code interface, the system forces the author to adopt a Product Manager's mindset for every entry.</li>
                <li><strong>Content-as-Data:</strong> I decoupled content from presentation, creating a local "Headless CMS" architecture. This allows for rapid content iteration without touching the UI codebase.</li>
                <li><strong>Performance for SEO:</strong> Implemented Server-Side Rendering (SSR) to ensure project case studies are instantly indexable and generate rich preview cards for social sharing.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Technical Implementation</h2>
        <p>
            I chose to build on the absolute <strong>bleeding edge</strong> of the web ecosystem to demonstrate adaptability and technical leadership:
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Framework:</strong> Built with <strong>Angular 21</strong>, fully embracing <strong>Standalone Components</strong> and <strong>Signals</strong> for granular reactivity and reduced bundle size.</li>
                <li><strong>Styling Engine:</strong> Early adoption of <strong>Tailwind CSS v4</strong>. Utilized the new Rust-based Oxide engine and native CSS <code>@theme</code> support for a streamlined build pipeline.</li>
                <li><strong>Architecture:</strong> Adopted a <strong>Feature-Based Architecture</strong> (grouping by domain logic rather than file type) to ensure the codebase remains scalable and easy to navigate.</li>
                <li><strong>Testing:</strong> Integrated <strong>Vitest</strong> for blazing-fast unit testing, replacing legacy tools like Karma/Jasmine.</li>
            </ul>
        </p>

        <h2 class = "font-anton text-xl text-highlight-text mt-10 mb-5 ">Highlights</h2>
        <p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Advanced State Management:</strong> Leveraged Angular's <strong>Signals</strong> and <code>computed</code> values to manage UI state (like the image gallery) efficiently, ensuring only specific DOM elements update without wasteful re-renders.</li>
                <li><strong>Non-Destructive Hydration:</strong> Enabled Angular's latest hydration capabilities, allowing the client to "wake up" server-rendered HTML instantly without visual flickering or repainting.</li>
            </ul>
        </p>
    `
}