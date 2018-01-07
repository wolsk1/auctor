import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatepickerModule } from 'ngx-date-picker';

import { ComponentModule } from '../../components';
import { EventComponent } from './components/event.component';
import { EventListComponent } from './components/event-list.component';

@NgModule({
    imports: [               
        CommonModule,
        FormsModule,
        RouterModule,
        ComponentModule,
        DatepickerModule
    ],
    providers: [
    ],
    declarations: [        
        EventComponent,
        EventListComponent
    ],
    exports: []
})
export class EventsModule { }
