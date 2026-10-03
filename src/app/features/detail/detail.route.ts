import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import type { IProjectContent, ProjectLink } from '../../assets/projectContent/IProjectContent';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
    imports: [RouterLink],
})
export class Detail {
    private activatedRoute = inject(ActivatedRoute);

    protected currentIndex = signal(0);

    protected pageContent = toSignal(
        this.activatedRoute.data.pipe(
            tap(() => this.currentIndex.set(0)),
            map((data) => data['projectContent'] as IProjectContent | undefined),
        ),
        { initialValue: this.activatedRoute.snapshot.data['projectContent'] },
    );

    /** Show the live site first, followed by source code and design files. */
    protected orderedLinks = computed(() => {
        const links: ProjectLink[] = this.pageContent()?.links ?? [];
        return ['website', 'github', 'figma'].flatMap((channel) =>
            links.filter((link) => link.channel === channel),
        );
    });

    /** Number of gallery images; drives carousel control visibility. */
    protected imageCount(): number {
        return this.pageContent()?.image?.length ?? 0;
    }

    protected imageCaption(image: string, index: number): string {
        const page = this.pageContent();
        return page?.imageCaptions?.[image] ?? `${page?.projectName} screenshot ${index + 1}`;
    }

    /**
     * Snapshot rows for the top of the case study. Only populated fields are
     * rendered, so supplementary records can omit them cleanly.
     */
    protected snapshot(): { label: string; value: string }[] {
        const page = this.pageContent();
        if (!page) {
            return [];
        }
        const rows: { label: string; value: string }[] = [];
        if (page.role) {
            rows.push({ label: 'Role', value: page.role });
        }
        if (page.timeline) {
            rows.push({ label: 'Timeline', value: page.timeline });
        }
        if (page.teamSize !== undefined) {
            rows.push({
                label: 'Scope',
                value: page.teamSize > 1 ? `Team of ${page.teamSize}` : 'Independent',
            });
        }
        return rows;
    }

    protected nextImage() {
        const images = this.pageContent()?.image || [];
        if (images.length === 0) return;
        this.currentIndex.update((i) => (i + 1) % images.length);
    }

    protected prevImage() {
        const images = this.pageContent()?.image || [];
        if (images.length === 0) return;
        this.currentIndex.update((i) => (i - 1 + images.length) % images.length);
    }
}
