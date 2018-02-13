import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DefaultComponent } from './default.component';
import { ComponentModule } from '../../components/component.module';
import { routing } from './default.routing';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        ComponentModule
    ],
    providers: [
    ],
    declarations: [
        DefaultComponent
    ],
    exports: []
})
export class DefaultModule { }
