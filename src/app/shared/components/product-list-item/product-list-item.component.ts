import { Component, computed, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import type { Project } from '../../../core/services/portfolioService.service';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.html',
    imports: [RouterLink, NgTemplateOutlet],
})
export class ProductListItem {
    public readonly projectInfo = input.required<Project>();

    /**
     * External destination when the project has one (design artifacts link to
     * Figma), otherwise null so the card renders an internal router link.
     */
    protected readonly externalUrl = computed(() => this.projectInfo().url ?? null);

    /** Internal case-study path, used as the router link target. */
    protected readonly detailPath = computed(() => `/detail/${this.projectInfo().id}`);

    /** Accessible name, since the card's meaning is conveyed visually. */
    protected readonly ariaLabel = computed(() => {
        const project = this.projectInfo();
        const destination = project.url ? 'external design file' : 'case study';
        return `${project.projectName} — ${project.description}. Opens ${destination}.`;
    });

    /** Optional scope/status chip, e.g. "Team Capstone". */
    protected readonly scopeLabel = computed(() => this.projectInfo().scopeLabel ?? null);
}
