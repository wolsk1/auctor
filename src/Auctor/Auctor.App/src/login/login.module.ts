import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { routing } from './login.routing';

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
        LoginComponent
    ],
    exports: []
})
export class LoginModule { }
