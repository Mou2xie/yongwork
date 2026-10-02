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
    | 'Database'
    | 'Deployment'
    | 'Tools'
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
    { label: 'React Router', group: 'Frontend', tier: 'core', iconUrl: '/icons/reactrouter.svg' },
    { label: 'TanStack', group: 'Frontend', tier: 'core', iconUrl: '/icons/tanstack.svg' },

    { label: 'LangChain', group: 'Applied AI', tier: 'core', iconUrl: '/icons/langchain.png' },
    { label: 'LangGraph', group: 'Applied AI', tier: 'core', iconUrl: '/icons/langchain.png' },
    { label: 'Vercel AI SDK', group: 'Applied AI', tier: 'core', iconUrl: '/icons/vercel.svg' },

    { label: 'Node.js', group: 'Backend & Data', tier: 'core', iconUrl: '/icons/nodejs.svg' },
    { label: 'Supabase', group: 'Backend & Data', tier: 'core', iconUrl: '/icons/supabase.svg' },

    // ── Documented project practice ─────────────────────────────────────────
    { label: 'FastAPI', group: 'Backend & Data', tier: 'practice', iconUrl: '/icons/fastapi.svg' },
    { label: 'Hono', group: 'Backend & Data', tier: 'practice', iconUrl: '/icons/hono.svg' },
    { label: 'Express', group: 'Backend & Data', tier: 'practice', iconUrl: '/icons/express.svg' },
    { label: 'OpenRouter', group: 'Applied AI', tier: 'practice', iconUrl: '/icons/openrouter.svg' },
    { label: 'Vector RAG', group: 'Applied AI', tier: 'practice', iconUrl: '/icons/vector-rag.svg' },
    { label: 'Vue', group: 'Frontend', tier: 'practice', iconUrl: '/icons/vue.svg' },

    // ── Databases ───────────────────────────────────────────────────────────
    { label: 'PostgreSQL', group: 'Database', tier: 'practice', iconUrl: '/icons/postgresql.svg' },
    { label: 'MySQL', group: 'Database', tier: 'practice', iconUrl: '/icons/mysql.svg' },
    { label: 'MongoDB', group: 'Database', tier: 'practice', iconUrl: '/icons/mongo.svg' },
    { label: 'IndexedDB', group: 'Database', tier: 'practice', iconUrl: '/icons/indexeddb.svg' },
    { label: 'Vercel', group: 'Deployment', tier: 'practice', iconUrl: '/icons/vercel.svg' },
    { label: 'Cloudflare Workers', group: 'Deployment', tier: 'practice' },
    { label: 'Railway', group: 'Deployment', tier: 'practice' },
    { label: 'Google Analytics 4', group: 'Product & Collaboration', tier: 'practice' },
    { label: 'Google AdSense', group: 'Product & Collaboration', tier: 'practice' },
    { label: 'Gumroad', group: 'Product & Collaboration', tier: 'practice' },

    // ── Working familiarity (unchanged candidate tier) ──────────────────────
    { label: 'Angular', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/angular.svg' },
    { label: 'Svelte', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/svelte.svg' },
    { label: 'Sass', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/sass.svg' },
    { label: 'Pydantic v2', group: 'Also worked with', tier: 'familiarity' },
    { label: 'React Native', group: 'Also worked with', tier: 'familiarity', iconUrl: '/icons/expo.svg' },

    // ── Coursework exposure ─────────────────────────────────────────────────
    { label: 'Terraform', group: 'Also worked with', tier: 'coursework' },
    { label: 'AWS EC2 / Lambda / S3', group: 'Also worked with', tier: 'coursework' },
    { label: 'Flutter', group: 'Also worked with', tier: 'coursework' },
    { label: 'C#', group: 'Also worked with', tier: 'coursework' },

    // ── Product & collaboration tooling ─────────────────────────────────────
    { label: 'Figma', group: 'Tools', tier: 'core', iconUrl: '/icons/figma.svg' },
    { label: 'Git', group: 'Tools', tier: 'core', iconUrl: '/icons/git.svg' },
    { label: 'Notion', group: 'Tools', tier: 'core', iconUrl: '/icons/notion.svg' },
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
    'Database',
    'Tools',
];

export const ABOUT_SKILL_TIERS: SkillTier[] = ['familiarity', 'coursework'];
