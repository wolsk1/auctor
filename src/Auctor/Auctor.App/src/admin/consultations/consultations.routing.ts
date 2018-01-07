import { ModuleWithProviders } from '@angular/core';
import { Route } from '@angular/router';

import { ConListComponent } from './components/con-list.component';
import { ConItemComponent } from './components/con-item.component';

export const conRoutes: Route = {
    path: 'consulations',
    component: ConListComponent,        
    children: [        
        {
            path: 'edit/:id',
            component: ConItemComponent,
            data: { type: "edit" }
        },
        {
            path: 'add',
            component: ConItemComponent,
            data: { type: "add" }
        }            
    ]
};
