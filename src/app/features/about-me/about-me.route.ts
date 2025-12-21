import { Component } from "@angular/core";
import { Title } from "../../shared/components/title/title.component";
import { ContentSection } from "../../shared/components/content-section/content-section.component";

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.html',
    imports: [Title, ContentSection]
})
export class AboutMe {
}