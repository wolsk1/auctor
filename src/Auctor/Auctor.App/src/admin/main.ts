import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AdminModule } from './admin.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AdminModule);
