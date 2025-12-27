import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout.layout';
import { Index } from './features/index/index.route';
import { Portfolio } from './features/portfolio/portfolio.route';
import { AboutMe } from './features/about-me/about-me.route';
import { Contact } from './features/contact/contact.route';
import { Detail } from './features/detail/detail.route';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Index,
                title: 'YongXie - Home',
            },
            {
                path: 'portfolio',
                component: Portfolio,
                title: 'YongXie - Portfolio',
            },
            {
                path: 'about-me',
                component: AboutMe,
                title: 'YongXie - About Me',
            },
            {
                path: 'contact',
                component: Contact,
                title: 'YongXie - Contact',
            },
            {
                path: 'detail/:id',
                component: Detail,
                title: 'YongXie - Detail',
            },
        ],
    },
];
