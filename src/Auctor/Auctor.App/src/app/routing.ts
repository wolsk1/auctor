// import { HttpClient } from '@angular/common/http';
// import {
//   TranslateModule,
//   TranslateService
// } from '@ngx-translate/core';
// import {LocalizeRouterHttpLoader} from 'localize-router-http-loader';
// import {
//   LocalizeRouterModule,
//   LocalizeParser,
//   LocalizeRouterSettings
//  } from 'localize-router';

// import { AppRoutes, AppRouteConfig } from './app.routing';

// export const localRoutingConfig = LocalizeRouterModule.forRoot(AppRouteConfig, {
//   parser: {
//     provide: LocalizeParser,
//     useFactory: (translate, location, settings, http) =>
//         new LocalizeRouterHttpLoader(translate, location, settings, http),
//     deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
//   }
// })