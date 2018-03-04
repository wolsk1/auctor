import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConListComponent } from './components/con-list.component';
import { ConItemComponent } from './components/con-item.component';
import { ConViewComponent } from './components/con-view.component';
import { ConApplyComponent } from './components/con-apply.component';

const homeRoutes: Routes = [
    {
        path: 'cons',        
        children: [
            {
                path: '',
                component: ConListComponent                
            },
            {
                path: 'view',
                component: ConViewComponent                
            },
            {
                path: 'apply/:conId',
                component: ConApplyComponent                
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
