import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '../../shared/components/title/title.component';
import { ContentSection } from '../../shared/components/content-section/content-section.component';
import { QuestionComponent } from '../../shared/components/question/question.component';
import { AWARDS, EDUCATION, EXPERIENCE, PROFILE } from '../../core/data/profile.data';
import { ABOUT_SKILL_TIERS, SKILLS } from '../../core/data/skills.data';
import type { SkillTier } from '../../core/data/skills.data';

interface TierBlock {
    tier: SkillTier;
    label: string;
    description: string;
    skills: string[];
}

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.html',
    imports: [Title, ContentSection, QuestionComponent, RouterLink],
})
export class AboutMe {
    protected readonly profile = PROFILE;

    /** Engineering roles render above product roles, most recent first. */
    protected readonly engineeringExperience = EXPERIENCE.filter(
        (entry) => entry.group === 'engineering',
    );

    protected readonly productExperience = EXPERIENCE.filter(
        (entry) => entry.group === 'product',
    );

    protected readonly education = EDUCATION;
    protected readonly awards = AWARDS;

    /**
     * Familiarity and coursework tiers, which are deliberately kept off the
     * home page so they are not presented as core strengths.
     */
    protected readonly additionalSkills: TierBlock[] = [
        {
            tier: 'familiarity' as const,
            label: 'Working familiarity',
            description: 'Self-directed learning and project use, without a core-strength claim.',
            skills: this.skillsFor('familiarity'),
        },
        {
            tier: 'coursework' as const,
            label: 'Coursework exposure',
            description: 'Hands-on through Conestoga coursework, not production ownership.',
            skills: this.skillsFor('coursework'),
        },
    ].filter((block) => block.skills.length > 0);

    private skillsFor(tier: SkillTier): string[] {
        return SKILLS.filter((skill) => skill.tier === tier).map((skill) => skill.label);
    }

    /** Exposed so the template can assert the tier list stays in sync. */
    protected readonly tierOrder = ABOUT_SKILL_TIERS;
}
