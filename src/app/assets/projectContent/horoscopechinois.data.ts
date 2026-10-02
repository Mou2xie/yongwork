import type { IProjectContent } from './IProjectContent';

export const horoscopechinois: IProjectContent = {
    id: 4,
    projectName: 'horoscopechinois.today',
    description: 'French-language Chinese astrology site with server-rendered, database-backed daily content',
    role: 'Indie Developer',
    status: 'Live',
    teamSize: 1,
    scopeNote:
        'Independently built and operated, targeting a gap for well-presented Chinese astrology content in the French-language market.',
    links: [
        { channel: 'github', url: 'https://github.com/Mou2xie/HoroscopeChinois' },
        { channel: 'website', url: 'https://www.horoscopechinois.today/' },
    ],
    image: [
        '/projects/horoscopechinois/1.png',
        '/projects/horoscopechinois/2.png',
        '/projects/horoscopechinois/3.png',
        '/projects/horoscopechinois/4.png',
        '/projects/horoscopechinois/5.png',
    ],
    imageCaptions: {
        '/projects/horoscopechinois/1.png': 'horoscopechinois.today — French-language homepage and zodiac finder.',
        '/projects/horoscopechinois/2.png': 'horoscopechinois.today — zodiac-finder result.',
        '/projects/horoscopechinois/3.png': 'horoscopechinois.today — daily zodiac content.',
        '/projects/horoscopechinois/4.png': 'horoscopechinois.today — sign-specific daily reading.',
        '/projects/horoscopechinois/5.png': 'horoscopechinois.today — Chinese zodiac information.',
    },
    content: `
        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Background, Problem &amp; Audience</h2>
        <p>I developed horoscopechinois.today for French-speaking readers interested in Chinese astrology, targeting relevant Google search keywords. The product brings together two tasks: identifying a Chinese zodiac sign and finding that sign's daily content. This also created an operational challenge for me as a solo creator — publishing recurring French-language content in a form the website could display consistently.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Solution &amp; Key Features</h2>
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Zodiac finder:</strong> An interactive entry point helps a reader identify their sign.</li>
            <li><strong>Daily sign content:</strong> Database-backed pages connect zodiac profiles with the day's published material.</li>
            <li><strong>French-language presentation:</strong> The site focuses its navigation and editorial content on one language market.</li>
            <li><strong>Content publishing workflow:</strong> An AI-assisted workflow generates and publishes structured content for the site.</li>
            <li><strong>Responsive reading:</strong> Mobile-friendly layouts present sign information and daily content on smaller screens.</li>
        </ul>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Product Decisions</h2>
        <p>I kept sign discovery close to the daily-content journey so visitors could find a relevant starting point. Focusing on French narrowed the editorial and localization scope. Separating the publishing workflow from the website allowed recurring content to be stored as data rather than maintained as individual pages in source code.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">My Contribution</h2>
        <p>I independently created the website, its interface, application implementation and AI-driven content publishing workflow. The project joins a search-oriented content idea with the data and publishing system needed to operate it.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Technical Implementation</h2>
        <p>Next.js 15 App Router, React Server Components and Server Actions query daily content from Supabase PostgreSQL. TypeScript models the zodiac and content records. Tailwind CSS v4, DaisyUI and Lucide React provide the responsive interface. The zodiac finder supplies the interactive part of the discovery journey.</p>

        <h2 class="font-anton text-xl text-highlight-text mt-10 mb-5">Outcome &amp; Trade-offs</h2>
        <p>I delivered a French-language content site with a connected publishing workflow and database-backed daily pages. Recurring content needs editorial attention as well as automation. The documented implementation does not include accounts, email notifications, Chart.js visualizations or additional languages; those remained roadmap items.</p>
    `
}