import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component'

const homeRoutes: Routes = [
    {
        path: '',
        component: DefaultComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(homeRoutes);
