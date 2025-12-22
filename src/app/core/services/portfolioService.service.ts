import { Injectable } from "@angular/core";

export type Category = 'Web APP' | 'Mobile APP' | 'AI Workflow' | 'Design' | 'PRD';

export type Platform = 'Web' | 'Mobile' | 'Desktop' | 'Extension' | undefined;

export interface Project {
    id: number;
    projectName: string;
    category: Category;
    description: string;
    cover: string;
    platform: Platform[];
    featured: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    private readonly _portfolioCategories: Category[] = ['Web APP', 'AI Workflow', 'Design', 'PRD'];

    private readonly _portfolioProjects: Project[] = [
        {
            id: 1,
            projectName: 'LingoPick',
            category: 'Web APP',
            description: 'AI-powered word translator & vocabulary builder',
            cover: '/projects/lingopick/cover.png',
            platform: ['Web', 'Extension'],
            featured: true,
        },
        {
            id: 2,
            projectName: 'speakingpass.com',
            category: 'Web APP',
            description: 'IELTS speaking test topic bank',
            cover: '/projects/speakingpass/cover.png',
            platform: ['Web'],
            featured: true,
        },
        {
            id: 3,
            projectName: 'Transider',
            category: 'Web APP',
            description: 'Free En-Ch in-page translator',
            cover: '/projects/transider/cover.png',
            platform: ['Extension'],
            featured: true,
        },
        {
            id: 4,
            projectName: 'horoscopechinois.today (fr)',
            category: 'Web APP',
            description: 'Online Chinese traditional astrology',
            cover: '/projects/horoscopechinois/cover.png',
            platform: ['Web'],
            featured: false,
        },
        {
            id: 5,
            projectName: 'grokani.love',
            category: 'Web APP',
            description: 'Guide book for building affection with Ani',
            cover: '/projects/grokani/cover.png',
            platform: ['Web'],
            featured: false,
        },
        {
            id: 6,
            projectName: 'YongWork',
            category: 'Web APP',
            description: 'Personal website',
            cover: '/projects/yongwork/cover.png',
            platform: ['Web'],
            featured: false,
        },
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
