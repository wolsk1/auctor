import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassifiersService, ConsultationService, TitleService } from '../../../services';
import { Course } from '../../../models';

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

  courses: Course[] = [
    {
      id: 'f94a43b7-8c0e-44cf-9570-8f39a2318358',
      name: 'Maģistra darbs',
      code: 'InfT6004',
      summary: 'https://lais.llu.lv/pls/pub/kursi.kurss_dati?l=1&p_kods=GINT6004',
      scholars: [
        {
          id: '3e4fdadc-cad6-4475-9d0a-2d752a796ca8',
          name: 'Svetlana',
          surname: 'Atslēga',
          degree: 'Dr. math',
          department: null
        }
      ]
    }
  ]
}
