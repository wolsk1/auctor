import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../../components';

import { routing } from './courses.routing';
import { CoursesListComponent } from './components/courses-list.component';

@NgModule({
    imports: [               
        routing,       
        CommonModule,
        FormsModule,
        ComponentModule
    ],
    providers: [
    ],
    declarations: [        
        CoursesListComponent
    ],
    exports: []
})
export class CoursesModule { }
