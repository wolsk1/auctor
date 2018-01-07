import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';

export const defaultRoute: Route = {
    path: '',
    component: DefaultComponent
};
