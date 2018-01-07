import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatepickerModule } from 'ngx-date-picker';
import { ComponentModule } from '../../components';

import { ConListComponent } from './components/con-list.component';
import { ConItemComponent } from './components/con-item.component';

@NgModule({
    imports: [               
        CommonModule,
        FormsModule,
        RouterModule,
        DatepickerModule,
        ComponentModule
    ],
    providers: [
    ],
    declarations: [        
        ConListComponent,
        ConItemComponent
    ],
    exports: []
})
export class ConsultationsModule { }
