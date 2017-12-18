import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule } from 'ngx-date-picker';

import { ComponentModule } from '../../components';
import { EventConfComponent } from './event-conf.component';
import { ConEventComponent } from './components/con-event.component';
import { ConEventListComponent } from './components/con-event-list.component';
import { routing } from './event-conf.routing';


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
        EventConfComponent,
        ConEventComponent,
        ConEventListComponent
    ],
    exports: []
})
export class ConEventModule { }
