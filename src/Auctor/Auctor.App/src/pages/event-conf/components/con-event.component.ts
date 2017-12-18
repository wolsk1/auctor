import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';

import { TitleService } from '../../../services';

@Component({
    selector: 'con-event',
    template: require('./con-event.component.jade')
})
export class ConEventComponent implements OnInit {   

    public ngOnInit(): void {
       
    }
}
