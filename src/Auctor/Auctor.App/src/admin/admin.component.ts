import {
    Component,
    OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Constants } from '../constants';

@Component({
    selector: 'body',
    template: require('./admin.component.jade')
})
export class AdminComponent {
    public constructor(private titleService: Title) { }

    private pageReady: boolean;

    public ngOnInit(): void {      
        this.titleService.setTitle('Auctor');
    }
}