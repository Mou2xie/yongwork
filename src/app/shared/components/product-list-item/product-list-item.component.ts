import { Component, input } from "@angular/core";
import type { Project } from "../../../core/services/portfolioService.service";

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.html',
})
export class ProductListItem {

    public readonly projectInfo = input.required<Project>();

}
