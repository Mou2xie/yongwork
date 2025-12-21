import { Component } from "@angular/core";

@Component({
    selector: 'app-title',
    templateUrl: './title.html',
    host: {
        'class': 'block text-center mb-15',
    }
})
export class Title { }