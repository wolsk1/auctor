import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'default',
    template: require('./default.component.jade')
})
export class DefaultComponent implements OnInit {
    public constructor(private titleService: Title) { }    

    public ngOnInit(): void {
        //TODO implement service to name each page      
        this.titleService.setTitle('Sākums | Auctor');
    }
}
