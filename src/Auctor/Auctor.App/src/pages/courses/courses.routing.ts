import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './components/courses-list.component';
import { CourseConsComponent } from './components/course-cons.component';
import { CourseConViewComponent } from './components/course-con-view.component';

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
            },
            {
                path: 'cons/:couseCode/:conId',
                component: CourseConViewComponent
            },
        ]
    }
];

//TODO attēli pārāk ilgi ielādējas pirmajā ielādē

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
