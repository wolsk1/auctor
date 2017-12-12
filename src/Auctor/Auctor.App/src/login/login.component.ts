import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'auctor-login',
    template: require('./login.component.jade')
})
export class LoginComponent implements OnInit {
    public constructor(private titleService: Title) { }    

    public ngOnInit(): void {
        //TODO implement service to name each page      
        this.titleService.setTitle('Autorizācija | Auctor');
    }
}
