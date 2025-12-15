import { Routes } from '@angular/router';
import { Index } from './features/index/index.route';

import { MainLayout } from './layouts/main-layout/main-layout.layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Index,
            },
        ],
    },
];
