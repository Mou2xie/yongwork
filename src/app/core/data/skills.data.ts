/**
 * Shared skills data with explicit proficiency tiers.
 *
 * Tiers follow `Facts/Skills.md` exactly:
 * - `core`        → Core Strengths / strongest working proficiency
 * - `practice`    → documented personal project implementation
 * - `familiarity` → the candidate's existing working-familiarity assessment
 * - `coursework`  → coursework exposure only
 *
 * `iconUrl` is optional. When omitted the UI renders the label alone rather
 * than substituting an unrelated icon. Do not add an icon that does not match
 * the technology.
 */

export type SkillTier = 'core' | 'practice' | 'familiarity' | 'coursework';

export type SkillGroup =
    | 'Languages'
    | 'Frontend'
    | 'Applied AI'
    | 'Backend & Data'
    | 'Deployment'
    | 'Product & Collaboration'
    | 'Also worked with';

export interface Skill {
    label: string;
    group: SkillGroup;
    tier: SkillTier;
    iconUrl?: string;
}

export const SKILLS: Skill[] = [
    // ── Core strengths ──────────────────────────────────────────────────────
    { label: 'TypeScript', group: 'Languages', tier: 'core', iconUrl: '/icons/typescript.svg' },
    { label: 'JavaScript', group: 'Languages', tier: 'core', iconUrl: '/icons/javascript.svg' },
    { label: 'Python', group: 'Languages', tier: 'core', iconUrl: '/icons/python.svg' },

    { label: 'React', group: 'Frontend', tier: 'core', iconUrl: '/icons/react.svg' },
    { label: 'Next.js', group: 'Frontend', tier: 'core', iconUrl: '/icons/nextjs.svg' },
    { label: 'Tailwind CSS', group: 'Frontend', tier: 'core', iconUrl: '/icons/tailwindcss.svg' },
    { label: 'React Router', group: 'Frontend', tier: 'core' },
    { label: 'TanStack Query', group: 'Frontend', tier: 'core' },

    { label: 'LangChain', group: 'Applied AI', tier: 'core', iconUrl: '/icons/langchain.png' },
    { label: 'LangGraph', group: 'Applied AI', tier: 'core', iconUrl: '/icons/langchain.png' },
    { label: 'Vercel AI SDK', group: 'Applied AI', tier: 'core' },

    { label: 'Node.js', group: 'Backend & Data', tier: 'core', iconUrl: '/icons/nodejs.svg' },
    { label: 'Supabase', group: 'Backend & Data', tier: 'core', iconUrl: '/icons/supabase.svg' },

    // ── Documented project practice ─────────────────────────────────────────
    { label: 'FastAPI', group: 'Backend & Data', tier: 'practice' },
    { label: 'Hono', group: 'Backend & Data', tier: 'practice' },
    { label: 'Express', group: 'Backend & Data', tier: 'practice', iconUrl: '/icons/express.svg' },
    { label: 'Zod', group: 'Applied AI', tier: 'practice' },
    { label: 'OpenRouter', group: 'Applied AI', tier: 'practice' },
    { label: 'Vector RAG', group: 'Applied AI', tier: 'practice' },
    { label: 'Tool Calling', group: 'Applied AI', tier: 'practice' },
    { label: 'Structured Generation', group: 'Applied AI', tier: 'practice' },
    { label: 'WXT', group: 'Frontend', tier: 'practice' },
    { label: 'Zustand', group: 'Frontend', tier: 'practice' },
    { label: 'DaisyUI', group: 'Frontend', tier: 'practice' },
    { label: 'IndexedDB', group: 'Backend & Data', tier: 'practice' },
    { label: 'Vercel', group: 'Deployment', tier: 'practice', iconUrl: '/icons/vercel.svg' },
    { label: 'Cloudflare Workers', group: 'Deployment', tier: 'practice' },
    { label: 'Railway', group: 'Deployment', tier: 'practice' },
    { label: 'Google Analytics 4', group: 'Product & Collaboration', tier: 'practice' },
    { label: 'Google AdSense', group: 'Product & Collaboration', tier: 'practice' },
    { label: 'Gumroad', group: 'Product & Collaboration', tier: 'practice' },

    // ── Working familiarity (unchanged candidate tier) ──────────────────────
    { label: 'Angular', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/angular.svg' },
    { label: 'Vue', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/vue.svg' },
    { label: 'Svelte', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/svelte.svg' },
    { label: 'Sass', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/sass.svg' },
    { label: 'Pydantic v2', group: 'Also worked with', tier: 'familiarity' },
    { label: 'React Native', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/expo.svg' },
    { label: 'PostgreSQL', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/mysql.svg' },

    // ── Coursework exposure ─────────────────────────────────────────────────
    { label: 'Terraform', group: 'Also worked with', tier: 'coursework' },
    { label: 'AWS EC2 / Lambda / S3', group: 'Also worked with', tier: 'coursework' },
    { label: 'Flutter', group: 'Also worked with', tier: 'coursework' },
    { label: 'C#', group: 'Also worked with', tier: 'coursework' },
    { label: 'MySQL', group: 'Also worked with', tier: 'coursework', iconUrl: '/icons/mysql.svg' },
    { label: 'MongoDB', group: 'Also worked with', tier: 'coursework', iconUrl: '/icons/mongo.svg' },

    // ── Product & collaboration tooling ─────────────────────────────────────
    { label: 'Figma', group: 'Product & Collaboration', tier: 'core', iconUrl: '/icons/figma.svg' },
    { label: 'Git', group: 'Product & Collaboration', tier: 'core', iconUrl: '/icons/git.svg' },
    { label: 'Notion', group: 'Product & Collaboration', tier: 'core', iconUrl: '/icons/notion.svg' },
];

/**
 * Home-page skill groups. Ordered by how central the group is to the
 * Applied AI + Full-Stack positioning. Only `core` and `practice` tiers appear
 * on the home page; familiarity and coursework live on the About page.
 */
export const HOME_SKILL_GROUPS: SkillGroup[] = [
    'Languages',
    'Frontend',
    'Applied AI',
    'Backend & Data',
    'Deployment',
];

export const ABOUT_SKILL_TIERS: SkillTier[] = ['familiarity', 'coursework'];
