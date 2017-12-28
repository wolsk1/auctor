import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule } from 'ngx-date-picker';

import { ComponentModule } from '../../components';
import { EventComponent } from './components/event.component';
import { EventListComponent } from './components/event-list.component';
import { routing } from './events.routing';


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
        EventComponent,
        EventListComponent
    ],
    exports: []
})
export class EventsModule { }
