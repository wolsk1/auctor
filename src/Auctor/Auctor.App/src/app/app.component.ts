import {
    Component,
    OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Constants } from '../constants';

@Component({
    selector: 'body',
    template: require('./app.component.jade')
})
export class AppComponent {
    public constructor(private titleService: Title) { }

    private pageReady: boolean;

    public ngOnInit(): void {      
        this.titleService.setTitle('auctor');
    }
}