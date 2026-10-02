import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolioService.service';

/**
 * Behavioural tests for the public catalog queries.
 *
 * These cover the rules that actually affect what a visitor sees — featured
 * ordering, hidden records, tag filtering and id integrity — rather than
 * restating static copy.
 */
describe('PortfolioService', () => {
    let service: PortfolioService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PortfolioService);
    });

    it('returns featured projects in explicit featuredOrder', () => {
        const featured = service.getFeaturedProjects();
        expect(featured.map((p) => p.projectName)).toEqual([
            'NovaAgent',
            'Agent Yong',
            'SpeakingPass',
        ]);
    });

    it('never exposes a hidden project through public queries', () => {
        const allNames = service.getAllProjects().map((p) => p.projectName);
        expect(allNames).not.toContain('grokani.love');
        expect(service.getProjectSummary(5)).toBeUndefined();

        for (const tag of service.portfolioTags) {
            const names = service.getProjectsByTag(tag).map((p) => p.projectName);
            expect(names).not.toContain('grokani.love');
        }
    });

    it('returns every visible project exactly once for the Products tag', () => {
        const all = service.getProjectsByTag('Products');
        const ids = all.map((p) => p.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('does not duplicate a project carrying several tags', () => {
        for (const tag of service.portfolioTags) {
            const ids = service.getProjectsByTag(tag).map((p) => p.id);
            expect(new Set(ids).size).toBe(ids.length);
        }
    });

    it('keeps project ids unique across the catalog', () => {
        const ids = service.getAllProjects().map((p) => p.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('resolves an existing detail route for every listed engineering project', () => {
        const withDetails = service
            .getAllProjects()
            .filter((p) => !p.url)
            .map((p) => p.id);
        // Design artifacts carry an external Figma url instead of a detail route.
        expect(withDetails.length).toBeGreaterThan(0);
        for (const id of withDetails) {
            expect(service.getProjectSummary(id)).toBeDefined();
        }
    });
});
