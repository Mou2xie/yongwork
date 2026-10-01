import { Component } from '@angular/core';
import { PROFILE } from '../../../core/data/profile.data';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    host: {
        class: 'w-full h-24 flex items-center justify-center',
    },
})
export class FooterComponent {
    /** Kept live rather than hard-coded, so it never goes stale. */
    protected readonly year = new Date().getFullYear();

    protected readonly name = PROFILE.name;
}
