import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import './footer.component.less'

@Component({
    selector: 'auctor-footer',
    template: require('./footer.component.jade')
})
export class FooterComponent implements OnInit {
    public ngOnInit(): void { }
}