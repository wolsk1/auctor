import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
    {
        path: 'technical',
        component: ErrorPageComponent,
        pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
