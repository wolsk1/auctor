import * as _ from 'lodash';
import {
    Component,
    OnInit    
} from '@angular/core';

@Component({
    selector: 'auctor-header',
    template: require('./header.component.jade')
})
export class HeaderComponent implements OnInit {
    public ngOnInit(): void { }
}