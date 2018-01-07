import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DefaultComponent } from './default.component';

@NgModule({
    imports: [        
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
    exports: [
        DefaultComponent
    ]
})
export class DefaultModule { }
