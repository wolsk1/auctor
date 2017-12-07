import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app';

import './extensions';
//import './styles/if-styles/if-styles.less';
//import './styles/app.less';
import './styles/llu/llu.less';
//import './favicon.ico';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
