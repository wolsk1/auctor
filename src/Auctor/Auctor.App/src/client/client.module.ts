import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DefaultModule } from './default/default.module';

@NgModule({
    imports: [       
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        DefaultModule
    ],    
    declarations: [        
    ],
    exports: []
})
export class ClientModule { }
