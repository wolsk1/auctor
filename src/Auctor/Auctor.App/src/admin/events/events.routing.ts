import { ModuleWithProviders } from '@angular/core';
import { Route } from '@angular/router';

import { EventListComponent } from './components/event-list.component';
import { EventComponent } from './components/event.component';

export const eventRoutes: Route = {
    path: 'events',
    component: EventListComponent,       
    children:[        
        {
            path: 'add',
            component: EventComponent,
            data: { type: "add" }                
        },
        {
            path: 'edit/:id',
            component: EventComponent,
            data: { type: "edit" }                
        }
    ]
}
