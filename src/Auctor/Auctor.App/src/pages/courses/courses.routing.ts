import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './components/courses-list.component';
import { CourseConsComponent } from './components/course-cons.component';

const routes: Routes = [
    {
        path: 'courses',        
        children: [
            {
                path: '',
                component: CoursesListComponent                
            },
            {
                path: 'cons/:couseCode',
                component: CourseConsComponent                
            }      
        ]
    }    
];

//TODO attēli pārāk ilgi ielādējas pirmajā ielādē

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
