import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';

import { ConEvent } from '../models';

@Component({
    selector: 'con-event-list',
    template: require('./con-event-list.component.jade')
})
export class ConEventListComponent implements OnInit {   

    private events: ConEvent[] = [];

    public ngOnInit(): void {
        
    }   
}
