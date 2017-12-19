import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-date-picker';
import { ComponentModule } from '../../components';

import { ConsultationsComponent } from './consultations.component';
import { ConListComponent } from './components/con-list.component';
import { ConComponent } from './components/con.component';
import { routing } from './consultations.routing';

@NgModule({
    imports: [
        routing,       
        CommonModule,
        FormsModule
        ,DatepickerModule
        ,ComponentModule
    ],
    providers: [
    ],
    declarations: [
        ConsultationsComponent
        ,ConListComponent
        ,ConComponent
    ],
    exports: []
})
export class ConsultationsModule { }
