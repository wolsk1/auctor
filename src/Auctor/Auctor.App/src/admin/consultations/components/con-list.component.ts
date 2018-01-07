import * as _ from 'lodash';
import {
    Component,
    OnInit,
    Input
} from '@angular/core';

import { ConsultationService, TitleService } from '../../../services';
import { Consultation } from '../../../models';

@Component({
    selector: 'con-list',
    template: require('./con-list.component.jade')
})
export class ConListComponent implements OnInit {
    cons: Consultation[];
    @Input() lecturerId: string = '3e4fdadc-cad6-4475-9d0a-2d752a796ca8';
    constructor(
        private consultations: ConsultationService,
        private titleService: TitleService) {
        this.cons = [];
    }

    public ngOnInit(): void {
        this.titleService.setTitle('consultations');
        this.consultations.getConsultations(this.lecturerId).subscribe(
            cons => this.cons = cons);
    }
}
