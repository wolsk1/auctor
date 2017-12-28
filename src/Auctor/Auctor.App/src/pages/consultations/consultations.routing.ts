import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConListComponent } from './components/con-list.component';
import { ConItemComponent } from './components/con-item.component'

const homeRoutes: Routes = [
    {
        path: 'consulations',        
        children: [
            {
                path: 'list',
                component: ConListComponent                
            },
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
    }    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(homeRoutes);
