import { Component, inject } from "@angular/core";
import { Title } from "../../shared/components/title/title.component";
import { ProductListItem } from "../../shared/components/product-list-item/product-list-item.component";
import { ContentSection } from "../../shared/components/content-section/content-section.component";
import { PortfolioService } from "../../core/services/portfolioService.service";

interface Stack {
    iconUrl: string;
    label: string;
}

@Component({
    selector: 'app-index',
    templateUrl: './index.html',
    imports: [Title, ProductListItem, ContentSection],
})
export class Index {

    protected readonly portfolioService = inject(PortfolioService);

    protected readonly featuredProjects = this.portfolioService.getFeaturedProjects();

    protected frontendStack: Stack[] = [
        {
            iconUrl: '/icons/javascript.svg',
            label: 'JavaScript'
        },
        {
            iconUrl: '/icons/typescript.svg',
            label: 'TypeScript'
        },
        {
            iconUrl: '/icons/react.svg',
            label: 'React'
        },
        {
            iconUrl: '/icons/angular.svg',
            label: 'Angular'
        },
        {
            iconUrl: '/icons/vue.svg',
            label: 'Vue.js'
        },
        {
            iconUrl: '/icons/svelte.svg',
            label: 'Svelte'
        },
        {
            iconUrl: '/icons/nextjs.svg',
            label: 'Next.js'
        },
        {
            iconUrl: '/icons/nuxt.svg',
            label: 'Nuxt.js'
        }, {
            iconUrl: '/icons/expo.svg',
            label: 'Expo'
        }, {
            iconUrl: '/icons/tailwindcss.svg',
            label: 'TailwindCSS'
        }
    ];

    protected backendStack: Stack[] = [
        {
            iconUrl: '/icons/nodejs.svg',
            label: 'Node.js'
        },
        {
            iconUrl: '/icons/express.svg',
            label: 'Express'
        },
        {
            iconUrl: '/icons/nestjs.svg',
            label: 'Nest.js'
        },
        {
            iconUrl: '/icons/php.svg',
            label: 'PHP'
        },
        {
            iconUrl: '/icons/supabase.svg',
            label: 'Supabase'
        },
        {
            iconUrl: '/icons/vercel.svg',
            label: 'Vercel'
        },
    ];

    protected databaseStack: Stack[] = [
        {
            iconUrl: '/icons/mysql.svg',
            label: 'MySQL'
        },
        {
            iconUrl: '/icons/mongo.svg',
            label: 'MongoDB'
        },
    ];

    protected toolsStack: Stack[] = [
        {
            iconUrl: '/icons/n8n.svg',
            label: 'n8n'
        },
        {
            iconUrl: '/icons/figma.svg',
            label: 'Figma'
        },
        {
            iconUrl: '/icons/notion.svg',
            label: 'Notion'
        },
    ];
}    