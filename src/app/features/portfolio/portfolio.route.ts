import { Component } from "@angular/core";
import { ProductListItem } from "../../shared/components/product-list-item/product-list-item.component";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.html',
    imports: [ProductListItem],
})
export class Portfolio {
}