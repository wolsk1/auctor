import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';

import { TitleService, EventService } from '../../../services';
import { Event } from '../../../models';

@Component({
    selector: 'event-list',
    template: require('./event-list.component.jade')
})
export class EventListComponent implements OnInit {   

    events: Event[];
    consultationId: string = '3e4fdadc-cad6-4475-9d0a-2d752a796ca8';
    constructor(
        private eventsService: EventService,
        private titleService: TitleService) {
        this.events = [];
    }

    public ngOnInit(): void {
        this.titleService.setTitle('events');
        this.eventsService.getAll(this.consultationId).subscribe(
            events => this.events = events);
    }  
}
