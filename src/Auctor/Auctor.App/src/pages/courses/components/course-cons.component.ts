import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassifiersService, ConsultationService, TitleService } from '../../../services';
import { Course } from '../../../models';

@Component({
  selector: 'course-cons',
  template: require('./course-cons.component.jade')
})
export class CourseConsComponent implements OnInit {
  constructor(private titleService: TitleService) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Konsultācijas');
  }
}