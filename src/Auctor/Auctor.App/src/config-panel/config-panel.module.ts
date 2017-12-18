import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule, AlertConfig } from 'ngx-bootstrap';

import { ConfigPanelComponent } from './config-panel.component';
import { routing } from './config-panel.routing';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        AlertModule.forRoot()
    ],
    providers: [
    ],
    declarations: [
        ConfigPanelComponent
    ],
    exports: []
})
export class ConfigPanelModule { }
