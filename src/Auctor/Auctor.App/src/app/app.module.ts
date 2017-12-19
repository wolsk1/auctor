import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ComponentModule } from '../components';
import { ErrorPageModule } from '../error-page';
import { POWERSTEERING_PROVIDERS } from '../providers';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { DefaultModule } from './../default/default.module';
import { 
    ConEventModule,
    ConsultationsModule
} from '../pages';
import { ConfigPanelModule } from './../config-panel/config-panel.module';

@NgModule({
    imports: [
        appRouting,
        ErrorPageModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        FooterModule,
        HeaderModule,
        ComponentModule,
        DefaultModule
        ,ConEventModule
        ,ConfigPanelModule
        ,ConsultationsModule
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
