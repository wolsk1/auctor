import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsultationService, TitleService } from '../../../services';
import { Consultation } from '../../../models';

@Component({
    selector: 'con-view',
    template: require('./con-view.component.jade')
})
export class ConViewComponent implements OnInit {
    constructor(private titleService: TitleService,
        private consultations: ConsultationService,
        private route: ActivatedRoute) {        
    }

    //TODO
    /*    
     */

    conId: string = 'e5135f8d-16a8-49a2-ae44-473105db27dd';

    public ngOnInit(): void {
        this.titleService.setTitle('Skatīt konsultāciju');       
    }
}
