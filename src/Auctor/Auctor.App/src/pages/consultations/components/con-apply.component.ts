import * as _ from 'lodash';
import {
    Component,
    OnInit,
    Input
} from '@angular/core';

import { ConsultationService, TitleService } from '../../../services';
import { Consultation } from '../../../models';

@Component({
    selector: 'con-apply',
    template: require('./con-apply.component.jade')
})
export class ConApplyComponent implements OnInit {
    constructor(
        private consultations: ConsultationService,
        private titleService: TitleService) {
        this.cons = [];
        this.courseCode = 'TestCode'
    }

    cons: Consultation[];
    courseCode: string;

    public ngOnInit(): void {
        this.titleService.setTitle('con-apply');       
    }
}
