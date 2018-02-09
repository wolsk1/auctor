import * as _ from 'lodash';
import {
    Component,
    OnInit    
} from '@angular/core';

@Component({
    selector: 'auctor-nav',
    template: require('./navigation.component.jade')
})
export class NavigationComponent implements OnInit {
    public ngOnInit(): void { }
}