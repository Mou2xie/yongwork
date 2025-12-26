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
    url?: string;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    private readonly _portfolioCategories: Category[] = ['Web APP', 'AI Workflow', 'Design'];

    private readonly _portfolioProjects: Project[] = [

        // Web APP start from 1
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
            projectName: 'molibb.baby (ch)',
            category: 'Web APP',
            description: 'Cross gate account manager',
            cover: '/projects/molibb/cover.png',
            platform: ['Web'],
            featured: false,
        },
        {
            id: 7,
            projectName: 'YongWork',
            category: 'Web APP',
            description: 'Personal website',
            cover: '/projects/yongwork/cover.png',
            platform: ['Web'],
            featured: false,
        },
        {
            id: 8,
            projectName: 'Hu-Landscaping',
            category: 'Web APP',
            description: 'Landscaping company landing page',
            cover: '/projects/hu-landscaping/cover.png',
            platform: ['Web'],
            featured: false,
        },

        // AI Workflow start from 300
        {
            id: 300,
            projectName: 'n8n Tender Document Generator',
            category: 'AI Workflow',
            description: 'AI workflow to generate tender document',
            cover: '/projects/tendermaker/cover.png',
            platform: [],
            featured: false,
        },
        {
            id: 301,
            projectName: 'n8n Fortune Generator',
            category: 'AI Workflow',
            description: 'Generate poetry fortunes for horoscopechinois.today',
            cover: '/projects/fortunegenerator/cover.png',
            platform: [],
            featured: false,
        },
        {
            id: 302,
            projectName: 'n8n Google Trends Keywords Tool',
            category: 'AI Workflow',
            description: 'Find product idea from Google Trends keywords',
            cover: '/projects/keywordexplainer/cover.png',
            platform: [],
            featured: false,
        },


        // Design works start from 500
        {
            id: 500,
            projectName: 'Top Hunter',
            category: 'Design',
            description: 'Monster Hunter game recorder APP',
            cover: '/design/tophunter.png',
            platform: ['Mobile'],
            featured: false,
            url: 'https://www.figma.com/design/ysrhPHImoduDziVILfeVap/MonsterHunterRecorder?t=tnWxb1oP8CesnEiL-1',
        },
        {
            id: 501,
            projectName: 'SMS Forwarder',
            category: 'Design',
            description: 'An Android APP for forwarding messages',
            cover: '/design/smsforwarder.png',
            platform: ['Mobile'],
            featured: false,
            url: 'https://www.figma.com/design/5Uo3kVScGig5Ry8m13hPud/sms-forwarder?t=tnWxb1oP8CesnEiL-1',
        },
        {
            id: 502,
            projectName: 'LingoPick',
            category: 'Design',
            description: 'All platforms design for vocabulary builder',
            cover: '/design/lingopick.png',
            platform: ['Web', 'Extension', 'Mobile'],
            featured: false,
            url: 'https://www.figma.com/design/MVUYNNXyCxGtkKeYwp8iD9/LingoPick?t=tnWxb1oP8CesnEiL-1',
        },
        {
            id: 503,
            projectName: 'Personal Website',
            category: 'Design',
            description: 'Personal website design',
            cover: '/design/yong.png',
            platform: ['Web'],
            featured: false,
            url: 'https://www.figma.com/design/HKqAEOWLkDBUUjbmydAaoP/personal-website?t=tnWxb1oP8CesnEiL-1',
        },
        {
            id: 504,
            projectName: 'Transider',
            category: 'Design',
            description: 'Chrome extension design',
            cover: '/design/transider.png',
            platform: ['Extension'],
            featured: false,
            url: 'https://www.figma.com/design/L22X0kY1g8xSfvKqbnzjdF/Transider?t=tnWxb1oP8CesnEiL-1',
        },
        {
            id: 505,
            projectName: 'SpeakingPass',
            category: 'Design',
            description: 'English speaking test topic bank website design',
            cover: '/design/speakingpass.png',
            platform: ['Web'],
            featured: false,
            url: 'https://www.figma.com/design/sev2kFiBxPmh67C1YcZPlU/SpeakingPass_v3?t=tnWxb1oP8CesnEiL-1',
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
