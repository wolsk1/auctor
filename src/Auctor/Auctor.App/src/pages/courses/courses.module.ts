import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../../components';

import './courses.less';

import { routing } from './courses.routing';
import { CoursesListComponent } from './components/courses-list.component';
import { CourseConsComponent } from './components/course-cons.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ComponentModule,
        routing
    ],
    providers: [
    ],
    declarations: [
        CoursesListComponent,
        CourseConsComponent
    ],
    exports: []
})
export class CoursesModule { }
