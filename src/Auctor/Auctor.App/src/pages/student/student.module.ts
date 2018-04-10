import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { StudConListComponent } from './components/stud-con-list.component';
import { routing } from './student.routing';


@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule
    ],
    providers: [
    ],
    declarations: [
      StudConListComponent
    ],
    exports: []
})
export class StudentModule { }
