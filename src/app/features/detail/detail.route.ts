import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import type { IProjectContent } from '../../assets/projectContent/IProjectContent';

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

    /** Number of gallery images; drives carousel control visibility. */
    protected imageCount(): number {
        return this.pageContent()?.image?.length ?? 0;
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
        if (page.status) {
            rows.push({ label: 'Status', value: page.status });
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
