import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component'

@NgModule({
    imports: [       
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [        
        HeaderComponent  
    ],
    exports: [        
        HeaderComponent
    ]
})

export class HeaderModule { }
