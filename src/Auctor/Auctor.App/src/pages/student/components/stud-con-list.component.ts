import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';

import { TitleService, EventService } from '../../../services';
import { Event } from '../../../models';

@Component({
    selector: 'stud-con-list',
    template: require('./stud-con-list.component.jade')
})
export class StudConListComponent implements OnInit {

    events: Event[];
    constructor(
        private titleService: TitleService) {
        this.events = [];
    }

    public ngOnInit(): void {
        this.titleService.setTitle('Konsultācijas');
    }
}
