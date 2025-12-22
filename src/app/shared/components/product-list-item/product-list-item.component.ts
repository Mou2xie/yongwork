import { Component, input } from "@angular/core";
import type { Project } from "../../../core/services/portfolioService.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.html',
    imports: [RouterLink]
})
export class ProductListItem {

    public readonly projectInfo = input.required<Project>();

}
