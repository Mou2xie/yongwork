import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/profile.data';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
})
export class Contact {
    protected readonly profile = PROFILE;
}
