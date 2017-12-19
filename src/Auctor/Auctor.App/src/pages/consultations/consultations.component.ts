import {
    Component,
    OnInit
} from '@angular/core';

import { TitleService } from '../../services';

@Component({
    selector: 'consultations',
    template: require('./consultations.component.jade')
})
export class ConsultationsComponent implements OnInit {
    public constructor(private titleService: TitleService) { }

    public ngOnInit(): void {
        this.titleService.setTitle('consultations');
    }
}
