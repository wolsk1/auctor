import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TitleService } from '../../services';

@Component({
    selector: 'event-conf',
    template: require('./event-conf.component.jade')
})
export class EventConfComponent implements OnInit {
    public constructor(private titleService: TitleService) { }

    public ngOnInit(): void {
        this.titleService.setTitle('event-conf');
    }
}
