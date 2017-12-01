import * as _ from 'lodash';
import {
    Component,
    OnInit    
} from '@angular/core';

@Component({
    selector: 'auctor-footer',
    template: require('./footer.component.jade')
})
export class FooterComponent implements OnInit {
    public ngOnInit(): void { }
}