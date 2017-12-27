import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './extensions';
import { AppModule } from './app';

//import './styles/if-styles/if-styles.less';
import './styles/llu/llu.less';
import './styles/app.less';
//import './favicon.ico';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
