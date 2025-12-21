import { Injectable } from "@angular/core";

export type Category = 'Web APP' | 'Mobile APP' | 'AI Workflow' | 'Design Work' | 'PRD';

export type Platform = 'Web' | 'Mobile' | 'Desktop' | 'Extension' | undefined;

export interface Project {
    name: string;
    category: Category;
    description: string;
    cover: string;
    url: string;
    platform: Platform[];
    featured: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    private readonly _portfolioCategories: Category[] = ['Web APP', 'Mobile APP', 'AI Workflow', 'Design Work', 'PRD'];

    private readonly _portfolioProjects: Project[] = [
        {
            name: 'LingoPick',
            category: 'Web APP',
            description: 'AI-powered Word Translator & Vocabulary Builder',
            cover: '/projects/lingopick/cover.png',
            url: '/',
            platform: ['Web', 'Extension'],
            featured: true,
        },
        {
            name: 'SpeakingPass',
            category: 'Web APP',
            description: 'Improve speaking skills for IELTS exam',
            cover: '/projects/speakingpass/cover.png',
            url: '/',
            platform: ['Web'],
            featured: true,
        },
        {
            name: 'Transider',
            category: 'Web APP',
            description: 'En-Ch in-page Translator',
            cover: '/projects/transider/cover.png',
            url: '/',
            platform: ['Extension'],
            featured: true,
        }
    ];

    public get portfolioCategories() {
        return this._portfolioCategories;
    }

    public getFeaturedProjects() {
        const featuredProjects = this._portfolioProjects.filter(item => item.featured);
        return featuredProjects.length > 3 ? featuredProjects.slice(0, 3) : featuredProjects;
    }

    public getPortfolioProjectsByCategory(category: Category) {
        return this._portfolioProjects.filter(item => item.category === category);
    }

}
