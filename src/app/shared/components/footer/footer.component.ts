import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    host: {
        'class': 'w-full h-24 flex items-center justify-center'
    }
})
export class FooterComponent {
    protected readonly year = new Date().getFullYear();
}
