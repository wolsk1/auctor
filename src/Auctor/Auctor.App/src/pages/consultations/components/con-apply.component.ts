import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsultationService, TitleService } from '../../../services';
import { Consultation } from '../../../models';

@Component({
    selector: 'con-apply',
    template: require('./con-apply.component.jade')
})
export class ConApplyComponent implements OnInit {
    constructor(private titleService: TitleService,
        private consultations: ConsultationService,
        private route: ActivatedRoute) {
        this.cons = [];
    }

    //TODO
    /*
    1. Konsultācijas id jābūt padotam kā parametram iekš URL
    2. izgūt readonly info izmantojot to id
    3. formas validācija
    4. nosūtīt pieteikumu uz db
    5. apmeklējuma mērķu ieguve
     */

    cons: Consultation[];    
    courseCode: string = 'InfT6004';
    lecturerId: string = '3e4fdadc-cad6-4475-9d0a-2d752a796ca8';
    conId: string = 'e5135f8d-16a8-49a2-ae44-473105db27dd'
    conDate: Date = new Date();
    model: any = { 
        conId: 'e5135f8d-16a8-49a2-ae44-473105db27dd',
        matricula: 'IT12013'
    }

    public ngOnInit(): void {
        this.titleService.setTitle('Reģistrēties konsultācijai');
        this.route.params.subscribe(params => 
            this.model.conId = params["conId"]);
    }

    private save(){

    }
}
