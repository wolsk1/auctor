import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ClassifiersService, ConsultationService, TitleService } from '../../../services';
import { Course } from '../../../models';

@Component({
  selector: 'course-con-view',
  template: require('./course-con-view.component.jade')
})
export class CourseConViewComponent implements OnInit {
  conId: string;

  public ngOnInit(): void {
    this.titleService.setTitle('Konsultācija');
    this.route.params.subscribe(params => this.readParams(params));
  }

  private readParams(params: Params): void {
    if (params['conId']) {
      this.conId = params['conId'];
      //TODO execute request for this con information
    }
  }

  constructor(
    private titleService: TitleService,
    private route: ActivatedRoute) { }
}