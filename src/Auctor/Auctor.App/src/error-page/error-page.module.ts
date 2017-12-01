import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { routing } from './error-page.routing';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpModule
    ],
    declarations: [
        ErrorPageComponent
    ],
    exports: [
        ErrorPageComponent
    ]
})
export class ErrorPageModule { }
