import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ComponentModule } from '../components';
import { ErrorPageModule } from '../error-page';
import { POWERSTEERING_PROVIDERS } from '../providers';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { DefaultModule } from './../default/default.module';
import { 
    EventsModule,
    ConsultationsModule
} from '../pages';

@NgModule({
    imports: [               
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting,
        FooterModule,
        HeaderModule,
        ComponentModule,
        ErrorPageModule,
        DefaultModule,
        EventsModule,        
        ConsultationsModule,        
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        POWERSTEERING_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
