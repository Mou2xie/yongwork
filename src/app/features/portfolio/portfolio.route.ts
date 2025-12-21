import { Component, computed, inject, signal } from "@angular/core";
import { ProductListItem } from "../../shared/components/product-list-item/product-list-item.component";
import { ContentSection } from "../../shared/components/content-section/content-section.component";
import { PortfolioService } from "../../core/services/portfolioService.service";
import type { Category } from "../../core/services/portfolioService.service";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.html',
    imports: [ProductListItem, ContentSection],
})
export class Portfolio {

    private portfolioService = inject(PortfolioService);

    protected readonly categories = [...this.portfolioService.portfolioCategories];
    protected selectedCategory = signal(this.categories[0]);

    protected readonly projectsList = computed(() => this.portfolioService.getPortfolioProjectsByCategory(this.selectedCategory()))

    protected setSelectedCategory(category: Category) {
        this.selectedCategory.set(category);
    }
}