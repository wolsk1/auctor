import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { defaultRoute } from './default/default.routing';
import { conRoutes } from './consultations/consultations.routing';
import { eventRoutes } from './events/events.routing';

export const routerModule: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: DefaultComponent,        
        children: [ conRoutes, eventRoutes ]
    },
    {
        path: '**',
        redirectTo: `/`,
        pathMatch: 'full'
    }
]);
