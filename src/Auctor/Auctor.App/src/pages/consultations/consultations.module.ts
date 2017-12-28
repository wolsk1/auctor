import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-date-picker';
import { ComponentModule } from '../../components';

import { ConListComponent } from './components/con-list.component';
import { ConItemComponent } from './components/con-item.component';
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
        ConListComponent
        ,ConItemComponent
    ],
    exports: []
})
export class ConsultationsModule { }
