import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassifiersService, ConsultationService, TitleService } from '../../../services';
import { Consultation, Room } from '../../../models';

@Component({
  selector: 'courses-list',
  template: require('./courses-list.component.jade')
})
export class CoursesListComponent implements OnInit {
  constructor(private titleService: TitleService) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Priekšmetu saraksts');
  }
}
