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

    cons: Consultation[];
    courseCode: string = 'InfT6004';
    lecturerId: string = '3e4fdadc-cad6-4475-9d0a-2d752a796ca8';

    public ngOnInit(): void {
        this.titleService.setTitle('con-apply');
        this.route.params.subscribe(params => {
            this.courseCode = params["courseCode"];
            this.lecturerId = params["lecturerId"];
        })
    }
}
