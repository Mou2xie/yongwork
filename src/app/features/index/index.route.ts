import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '../../shared/components/title/title.component';
import { ProductListItem } from '../../shared/components/product-list-item/product-list-item.component';
import { ContentSection } from '../../shared/components/content-section/content-section.component';
import { PortfolioService } from '../../core/services/portfolioService.service';
import { QuestionComponent } from '../../shared/components/question/question.component';
import { AWARDS, PROFILE } from '../../core/data/profile.data';
import { HOME_SKILL_GROUPS, SKILLS } from '../../core/data/skills.data';
import type { Skill, SkillGroup } from '../../core/data/skills.data';

@Component({
    selector: 'app-index',
    templateUrl: './index.html',
    imports: [Title, ProductListItem, ContentSection, QuestionComponent, RouterLink],
})
export class Index {
    protected readonly profile = PROFILE;

    protected readonly awards = AWARDS;

    private portfolioService = inject(PortfolioService);

    /** Explicit featured ordering: NovaAgent → Agent Yong → SpeakingPass. */
    protected readonly featuredProjects = this.portfolioService.getFeaturedProjects();

    /**
     * Home-page stack, grouped by capability direction. Only `core` and
     * `practice` tiers appear here; familiarity and coursework live on About.
     * Order follows `HOME_SKILL_GROUPS` so the most central capability leads.
     */
    protected readonly skillGroups = this.buildSkillGroups();

    private buildSkillGroups(): { title: SkillGroup; skills: Skill[] }[] {
        return HOME_SKILL_GROUPS.map((title) => ({
            title,
            skills: SKILLS.filter(
                (skill) =>
                    skill.group === title &&
                    (skill.tier === 'core' || skill.tier === 'practice'),
            ),
        })).filter((group) => group.skills.length > 0);
    }
}
