import { Component, input } from "@angular/core";
import type { Project } from "../../../core/services/portfolioService.service";
import { Router } from "@angular/router";
import { inject } from "@angular/core";

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.html',
})
export class ProductListItem {

    public readonly projectInfo = input.required<Project>();

    private router = inject(Router);

    protected navigateToProject() {
        const url = this.projectInfo().url
            ? this.projectInfo().url
            : this.router.serializeUrl(this.router.createUrlTree(['/detail', this.projectInfo().id]));

        window.open(url, '_blank');
    }

}
