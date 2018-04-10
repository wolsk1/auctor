import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudConListComponent } from './components/stud-con-list.component'

const homeRoutes: Routes = [
    {
        path: 'student',
        children:[
            {
                path: '',
                component: StudConListComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(homeRoutes);
