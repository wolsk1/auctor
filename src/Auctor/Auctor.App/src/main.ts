import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './extensions';
import { AppModule } from './app';
import './common-styles';

platformBrowserDynamic().bootstrapModule(AppModule);
