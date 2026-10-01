import { Component, computed, inject, signal } from '@angular/core';
import { ProductListItem } from '../../shared/components/product-list-item/product-list-item.component';
import { ContentSection } from '../../shared/components/content-section/content-section.component';
import { PortfolioService } from '../../core/services/portfolioService.service';
import type { ProjectTag } from '../../core/models/portfolio.models';
import { QuestionComponent } from '../../shared/components/question/question.component';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.html',
    imports: [ProductListItem, ContentSection, QuestionComponent],
})
export class Portfolio {
    private portfolioService = inject(PortfolioService);

    protected readonly tags = [...this.portfolioService.portfolioTags];
    protected selectedTag = signal<ProjectTag>(this.tags[0]);

    /**
     * Projects for the active tag. A project carrying several tags appears
     * exactly once, because filtering runs over the single catalog list.
     */
    protected readonly projectsList = computed(() =>
        this.portfolioService.getProjectsByTag(this.selectedTag()),
    );

    protected setSelectedTag(tag: ProjectTag) {
        this.selectedTag.set(tag);
    }
}
