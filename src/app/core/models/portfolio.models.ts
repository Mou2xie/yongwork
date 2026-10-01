/**
 * Shared portfolio models.
 *
 * This module is the single source of truth for the shapes used by the public
 * project catalog, the detail-page case studies, and the shared profile data.
 *
 * Transition note: `Category` and `Platform` keep their original names and
 * members so existing call sites keep compiling. `CLI` was added to `Platform`
 * because Tender Master is a command-line tool, not a web application.
 */

export type Category = 'Web APP' | 'Mobile APP' | 'AI' | 'Design' | 'PRD';

export type Platform = 'Web' | 'Mobile' | 'Desktop' | 'Extension' | 'CLI' | undefined;

/** Filter tags used by the portfolio sidebar. `All` is the default view. */
export type ProjectTag =
    | 'All'
    | 'AI Applications'
    | 'Web Products'
    | 'Browser Extensions'
    | 'Client Delivery'
    | 'Design';

/**
 * Engagement scope. Kept separate from `status`: `kind` describes what the
 * project *is*, `status` describes where it currently stands.
 */
export type ProjectKind =
    | 'independent-product'
    | 'team-capstone'
    | 'client-delivery'
    | 'personal-website'
    | 'design-artifact';

export type ProjectStatus =
    | 'Live'
    | 'Production'
    | 'Delivered'
    | 'Prototype'
    | 'Discontinued'
    | 'Design concept';

/** Public project record backing both the portfolio list and the detail page. */
export interface ProjectSummary {
    id: number;
    projectName: string;
    /** Primary display category. Kept for backward compatibility with the original sidebar. */
    category: Category;
    description: string;
    cover: string;
    platform: Platform[];
    /** True when the project is eligible for the home-page featured row. */
    featured: boolean;
    /** Explicit featured ordering. Lower renders first. Only meaningful when `featured` is true. */
    featuredOrder?: number;
    /** External destination. When present, the card opens this instead of `/detail/:id`. */
    url?: string;
    tags: ProjectTag[];
    kind: ProjectKind;
    status: ProjectStatus;
    /** Personal role, shown as a Snapshot line on the detail page. */
    role?: string;
    teamSize?: number;
    /** Human-readable timeline, e.g. "Jan 2026 – Apr 2026". */
    timeline?: string;
    /**
     * When false the project is excluded from lists, filters and featured
     * selection. The detail route still resolves so existing links keep working.
     */
    visibility: boolean;
    /** Short status/scope label rendered on the card. */
    scopeLabel?: string;
    /** Evidence line rendered on the card, e.g. a metric or an award. */
    highlight?: string;
}

/** A single externally linked project artifact (design file, repository, live site). */
export interface ProjectLink {
    channel: string;
    url: string;
}

/**
 * Detail-page case study body.
 *
 * The optional presentation fields drive the Snapshot block. They are optional
 * so that supplementary records can omit them without breaking compilation.
 */
export interface IProjectContent {
    id: number;
    projectName: string;
    description: string;
    links: ProjectLink[];
    image: string[];
    /** Trusted, locally authored HTML. Rendered through Angular's innerHTML binding. */
    content: string;
    role?: string;
    status?: ProjectStatus;
    teamSize?: number;
    timeline?: string;
    /** Distinguishes personal contribution from the surrounding team system. */
    scopeNote?: string;
}
