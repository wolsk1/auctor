import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigPanelComponent } from './config-panel.component'

const routes: Routes = [
    {
        path: 'config',
        component: ConfigPanelComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
