import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import './navigation.less';
import { NavigationComponent } from './navigation.component'

@NgModule({
    imports: [
      RouterModule
    ],
    declarations: [
      NavigationComponent
    ],
    exports: [
      NavigationComponent
    ]
})

export class NavigationModule { }
