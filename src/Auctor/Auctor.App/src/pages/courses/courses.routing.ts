import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './components/courses-list.component';
const routes: Routes = [
    {
        path: 'courses',        
        children: [
            {
                path: '',
                component: CoursesListComponent                
            }      
        ]
    }    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
