import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout.layout';
import { Index } from './features/index/index.route';
import { Portfolio } from './features/portfolio/portfolio.route';
import { AboutMe } from './features/about-me/about-me.route';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Index,
            },
            {
                path: 'portfolio',
                component: Portfolio,
            },
            {
                path: 'about-me',
                component: AboutMe,
            },
        ],
    },
];
