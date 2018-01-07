import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DefaultModule } from './default/default.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { EventsModule } from './events/events.module';
import { routerModule } from './admin.routing';
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [       
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        routerModule,
        DefaultModule,
        EventsModule,
        ConsultationsModule
    ],    
    declarations: [
        AdminComponent        
    ],
    exports: []
})
export class AdminModule { }
