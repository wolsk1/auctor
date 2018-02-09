import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './components/event-list.component';
import { EventComponent } from './components/event.component';

const homeRoutes: Routes = [
    {
        path: 'events',       
        children:[
            {
                path: 'list',
                component: EventListComponent                
            },
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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(homeRoutes);
