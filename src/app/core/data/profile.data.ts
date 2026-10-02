/**
 * Shared public profile data.
 *
 * Every value here is selected from the Resume Facts library
 * (`Facts/Candidate.md`, `Facts/Claim Registry.md`). Home, About, Contact and the
 * footer all read from this file so identity, contact details and dates cannot
 * drift apart across pages.
 *
 * Not published here, by rule: student number, home address, contract terms,
 * client names, and any aggregated audience total across products.
 */

export interface ExperienceEntry {
    title: string;
    company: string;
    /** Optional context line, e.g. "Private Client · Remote". */
    context?: string;
    date: string;
    description: string;
    group: 'engineering' | 'product';
}

export interface EducationEntry {
    credential: string;
    institution: string;
    date: string;
    detail?: string;
}

export interface AwardEntry {
    /** Short award title, e.g. "1st Place". */
    title: string;
    /** Showcase or event the award was presented at. */
    event: string;
    project: string;
    /** Team scope is stated explicitly so individual credit is not overstated. */
    scope: string;
    year: string;
}

export const PROFILE = {
    /** Canonical public name. */
    name: 'Yongjie Xie',
    nameLocal: '谢 永杰',
    /** Confirmed positioning for this revision, per the content update plan. */
    headline: 'Applied AI & Full-Stack Developer',
    location: 'Waterloo, ON, Canada',
    email: 'jedxie2022@gmail.com',
    phone: '+1 382 889 3727',
    website: 'https://yongxie.dev/',
    availability: 'Open to Waterloo, Toronto and Remote roles',
    workAuth: 'Authorized to work in Canada; no sponsorship required',
    languages: 'English (Professional Working) · Mandarin (Native)',

    intro:
        "I'm Yongjie Xie, a developer based in Waterloo, Canada. I build AI-powered applications and full-stack products with TypeScript, React and Python, bringing 10+ years of product-management experience to build applications that align business goals with technical execution.",

    summary:
        'With 10+ years in Product Management, I bring a unique dual perspective to Full-stack Development. Beyond coding, I specialize in strategy, architecture, and design. I independently own the full lifecycle—from concept to deployment—bridging the gap between engineering and business to balance UX with strategic goals.',

    aboutIntro: [
        "Hi, I'm Yongjie Xie, an atypical developer based in Waterloo, Canada.",
        'Before diving deep into the world of code, I spent more than a decade in product management.',
        "My career began in 2012, during China's mobile internet boom. I worked at companies including iQIYI, Wanda Pictures and Polang Movies, across established businesses and startup environments. At Wanda Pictures, I helped grow the WeChat Mini Program into the company's second-largest online ticketing channel, reaching 150,000+ daily active users.",
        "In those years, I learned to listen to users, balance business goals with technical resources, and take ownership of delivery. That product mindset shapes how I work today: understand the user's problem, make deliberate product decisions, and carry the work through to delivery.",
        'After a decade of designing features and writing documentation, my creative drive grew stronger. I wanted to do more than plan the blueprint — I wanted to build it with my own hands.',
        'I started teaching myself HTML, CSS, JavaScript, Node.js and databases alongside my product work. As I learned, I began turning product concepts into working applications, from browser extensions and content-driven web applications to conversational agents and retrieval workflows.',
        "After moving to Canada, I completed Conestoga College's Mobile and Web Development diploma in 2026 with High Distinction and a GPA of 3.79/4.0. Alongside my coursework, I studied Python and AI agent development, applying that learning to independent products, client work and team capstones.",
        'I bring a product perspective to development, starting with business value and user experience. I work across TypeScript, React, Angular, Node.js and Python, combining full-stack development with applied AI — retrieval, tool calling, structured generation and LLM integration — to build products that solve real problems.',
        "If you are looking for a builder who understands both code and product, let's connect.",
    ],

    links: {
        github: 'https://github.com/Mou2xie',
        linkedin: 'https://www.linkedin.com/in/yong-jie-xie-95919632b',
        x: 'https://x.com/Jedxie3',
        agentYong: 'https://www.agentyong.chat/',
    },
};

export const EXPERIENCE: ExperienceEntry[] = [
    {
        group: 'engineering',
        title: 'Software Developer (Part-time)',
        company: 'Private Client',
        context: 'Remote · Smart Message Relay',
        date: 'Oct 2025 – Dec 2025',
        description:
            'Led product planning and UI design for Smart Message Relay, an Android application designed to automatically forward incoming SMS messages. Built a React Native demo with Expo Router and TypeScript covering the forwarding dashboard, message-log and blocked-sender workflows. The product was submitted to Google Play and was not publicly launched.',
    },
    {
        group: 'product',
        title: 'Product Owner',
        company: 'Polang Movies',
        date: '2022 – 2024',
        description:
            'Led product planning and delivery for a film marketing platform connecting audiences with pre-screening events through a WeChat Mini Program ecosystem, reaching 30,000+ users and 100+ events. Personally prototyped and shipped frontend landing pages in HTML, CSS and JavaScript alongside product responsibilities.',
    },
    {
        group: 'product',
        title: 'Senior Product Manager',
        company: 'Wanda Pictures',
        date: '2018 – 2022',
        description:
            "Grew the WeChat Mini Program into the company's 2nd-largest online ticketing channel at 150,000+ DAU. Cut the ticket-purchase flow from 7 to 4 steps, lifting conversion from 20% to 30%. Launched a restructured merchandise platform reaching 52% conversion before the 2020 Spring Festival campaign.",
    },
    {
        group: 'product',
        title: 'Product Manager',
        company: 'iQIYI.COM',
        date: '2016 – 2017',
        description:
            'Redesigned the iQIYI iPad app (AURA 2.0) focusing on content discovery and offline viewing. Shipped curated topic recommendations, watchlists and centralized movie modules to lift engagement.',
    },
    {
        group: 'product',
        title: 'Product Manager',
        company: 'WeTimes',
        date: '2012 – 2016',
        description:
            'Contributed to the Mobile QQ movie ticketing platform, helping grow DAU past 300,000. Improved community and content features in the Gewara app with retention as the product goal, and drove 900,000+ discount-card sales during the 2016 summer promotion.',
    },
];

export const EDUCATION: EducationEntry[] = [
    {
        credential: 'Ontario College Diploma in Mobile and Web Development',
        institution: 'Conestoga College',
        date: '2024 – 2026',
        detail: 'Graduated with High Distinction · GPA 3.79 / 4.0 · Waterloo, ON, Canada',
    },
    {
        credential: 'Bachelor of Arts in Advertising',
        institution: 'Beijing Normal University, Zhuhai',
        date: '2008 – 2012',
        detail: 'Department of Communication · Zhuhai, Guangdong, China',
    },
];

export const AWARDS: AwardEntry[] = [
    {
        title: '1st Place',
        event: 'Mobile & Web Development · ACSIT Capstone Showcase',
        project: 'NovaAgent',
        scope: 'Team award',
        year: '2026',
    },
    {
        title: 'Best Final Year Project',
        event: 'Conestoga Tech Showcase 2026',
        project: 'Fix My City',
        scope: 'Team award',
        year: '2026',
    },
];
