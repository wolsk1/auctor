import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TitleService } from '../services';

@Component({
    selector: 'config-panel',
    template: require('./config-panel.component.jade')
})
export class ConfigPanelComponent implements OnInit {
    public constructor(private titleService: TitleService) { }

    public ngOnInit(): void {
        this.titleService.setTitle('Config');
    }
}
