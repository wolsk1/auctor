import {
  Component,
  OnInit
} from '@angular/core';

import { ClassifiersService, ConsultationService } from '../../../services';

import { Consultation } from '../../../models';

@Component({
  selector: 'con-item',
  template: require('./con-item.component.jade')
})
export class ConItemComponent implements OnInit {
  model: Consultation;
  rooms: any[];


  constructor(
    private classifiers: ClassifiersService,
    private consultations: ConsultationService) {
    this.model = new Consultation();
    this.rooms = [];
  }

  public ngOnInit(): void {
    this.classifiers.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  private setRoom(room: string): void {
    this.model.room = room;
  }

  private save(): void {
    console.log(this.model)
    this.consultations.addConsultation(this.model).subscribe();
  }
}
