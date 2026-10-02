import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '../../shared/components/title/title.component';
import { ContentSection } from '../../shared/components/content-section/content-section.component';
import { QuestionComponent } from '../../shared/components/question/question.component';
import { AWARDS, EDUCATION, EXPERIENCE, PROFILE } from '../../core/data/profile.data';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.html',
    imports: [Title, ContentSection, QuestionComponent, RouterLink],
})
export class AboutMe {
    protected readonly profile = PROFILE;

    /** All roles, most recent first. */
    protected readonly workExperience = EXPERIENCE;

    protected readonly education = EDUCATION;
    protected readonly awards = AWARDS;
}
