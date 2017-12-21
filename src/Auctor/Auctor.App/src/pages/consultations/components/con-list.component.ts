import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';

import { ConItem } from '../models';

@Component({
    selector: 'con-list',
    template: require('./con-list.component.jade')
})
export class ConListComponent implements OnInit {   
    cons: ConItem[];
    
    constructor(){
        this.cons = [];
    }

    public ngOnInit(): void {
        
    }   
}
