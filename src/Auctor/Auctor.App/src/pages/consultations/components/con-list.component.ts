import {
    Component,
    OnInit
} from '@angular/core';

import { Con } from '../models';

@Component({
    selector: 'con-list',
    template: require('./con-list.component.jade')
})
export class ConListComponent implements OnInit {   

    private events: Con[] = [];

    public ngOnInit(): void {
        
    }   
}
