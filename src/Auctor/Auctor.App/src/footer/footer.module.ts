import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ]
})

export class FooterModule { }
