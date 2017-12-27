import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { ClassifiersService, ConsultationService } from '../../../services';

import { Consultation } from '../../../models';

@Component({
  selector: 'con-item',
  template: require('./con-item.component.jade')
})
export class ConItemComponent implements OnInit {
  constructor(
    private classifiers: ClassifiersService,
    private consultations: ConsultationService) {
    this.model = new Consultation();
    this.rooms = [];
  }

  @Input() lecturerId: string = '3e4fdadc-cad6-4475-9d0a-2d752a796ca8';
  @Input() id: string = null;
  model: Consultation;
  rooms: any[];    

  public ngOnInit(): void {
    this.classifiers.getRooms().subscribe(
      rooms => this.rooms = rooms);
      this.model.lecturerId = this.lecturerId;
  }

  private setRoom(room: string): void {
    this.model.roomId = room;
  }

  private save(): void {
    console.log(this.model)    
    this.consultations.addConsultation(this.model).subscribe();
  }
}
