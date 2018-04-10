import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-date-picker';
import { ComponentModule } from '../../components';

import { ConListComponent } from './components/con-list.component';
import { ConItemComponent } from './components/con-item.component';
import { ConViewComponent } from './components/con-view.component';
import { ConApplyComponent } from './components/con-apply.component';
import { routing } from './consultations.routing';

@NgModule({
    imports: [               
        routing,       
        CommonModule,
        FormsModule,
        ComponentModule,
        DatepickerModule
    ],
    providers: [
    ],
    declarations: [        
        ConListComponent,
        ConItemComponent,
        ConViewComponent,
        ConApplyComponent
    ],
    exports: []
})
export class ConsultationsModule { }
