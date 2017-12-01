import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NewlinePipe } from './new-line.pipe';

@NgModule({
    imports:[
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers:[
    ],
    declarations:[
        NewlinePipe
    ],
    exports:[
        NewlinePipe
    ]
})

export class PipesModule { }
