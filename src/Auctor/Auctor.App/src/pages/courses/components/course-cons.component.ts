import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ClassifiersService, ConsultationService, TitleService } from '../../../services';
import { Course } from '../../../models';

@Component({
  selector: 'course-cons',
  template: require('./course-cons.component.jade')
})
export class CourseConsComponent implements OnInit {
  cons: any[] = [
    {
      id: 'e5135f8d-16a8-49a2-ae44-473105db27dd',
      date: new Date('2017-12-28'),
      scholar: {
        id: '3e4fdadc-cad6-4475-9d0a-2d752a796ca8',
        name: 'Svetlana',
        surname: 'Atslēga',
        degree: 'Dr. math',
        department: null
      }
    }
  ]

  public ngOnInit(): void {
    this.titleService.setTitle('Konsultācijas');
  }

  constructor(private titleService: TitleService) {
  }
}