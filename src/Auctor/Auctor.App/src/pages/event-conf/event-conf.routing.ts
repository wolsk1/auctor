import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventConfComponent } from './event-conf.component'

const homeRoutes: Routes = [
    {
        path: 'events',
        component: EventConfComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(homeRoutes);
