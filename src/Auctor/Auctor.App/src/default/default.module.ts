import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DefaultComponent } from './default.component';
import { routing } from './default.routing';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [
    ],
    declarations: [
        DefaultComponent
    ],
    exports: []
})
export class DefaultModule { }
