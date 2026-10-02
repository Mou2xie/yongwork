import { Injectable } from '@angular/core';
import { PROJECT_CATALOG, PROJECT_TAGS } from '../data/projectCatalog.data';
import type { ProjectSummary, ProjectTag, ProjectStatus } from '../models/portfolio.models';

/**
 * Backward-compatible aliases.
 *
 * `Project` was the original public name of the list-item shape and is still
 * imported by `product-list-item`. It is now an alias of `ProjectSummary`
 * rather than a second, competing definition.
 */
export type { Category, Platform } from '../models/portfolio.models';
export type Project = ProjectSummary;

@Injectable({
    providedIn: 'root',
})
export class PortfolioService {
    /** Sidebar filter tags. `All` is first so it is the default selection. */
    public get portfolioTags(): ProjectTag[] {
        return PROJECT_TAGS;
    }

    /**
     * Backward-compatible accessor for the original category sidebar.
     * Derived from the catalog so it cannot go stale.
     */
    public get portfolioCategories(): ProjectSummary['category'][] {
        const seen: ProjectSummary['category'][] = [];
        for (const project of this.publicProjects()) {
            if (!seen.includes(project.category)) {
                seen.push(project.category);
            }
        }
        return seen;
    }

    /**
     * Every catalog entry marked publicly visible. Records hidden by rule
     * (e.g. grokani.love) never leave this service.
     */
    public getAllProjects(): ProjectSummary[] {
        return this.publicProjects();
    }

    /**
     * Featured projects for the home page, in explicit `featuredOrder`.
     * Deliberately does not depend on catalog array position, which is what
     * previously let an unrelated project occupy a featured slot.
     */
    public getFeaturedProjects(): ProjectSummary[] {
        return this.publicProjects()
            .filter((project) => project.featured)
            .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
            .slice(0, 3);
    }

    /**
     * Projects matching a sidebar tag. Each project appears once.
     */
    public getProjectsByTag(tag: ProjectTag): ProjectSummary[] {
        return this.publicProjects().filter((project) => project.tags.includes(tag));
    }

    /**
     * Backward-compatible category query retained for the transition period.
     * Prefer `getProjectsByTag` in new code.
     */
    public getPortfolioProjectsByCategory(
        category: ProjectSummary['category'],
    ): ProjectSummary[] {
        return this.publicProjects().filter((project) => project.category === category);
    }

    /** Single catalog lookup. Returns `undefined` for unknown or hidden ids. */
    public getProjectSummary(id: number): ProjectSummary | undefined {
        return this.publicProjects().find((project) => project.id === id);
    }

    private publicProjects(): ProjectSummary[] {
        return PROJECT_CATALOG.filter((project) => project.visibility);
    }
}

/** Re-exported for callers that render status labels. */
export type { ProjectStatus };
