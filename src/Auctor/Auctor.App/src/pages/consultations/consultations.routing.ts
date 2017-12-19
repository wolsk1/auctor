import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationsComponent } from './consultations.component'

const homeRoutes: Routes = [
    {
        path: 'consulations',
        component: ConsultationsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(homeRoutes);
