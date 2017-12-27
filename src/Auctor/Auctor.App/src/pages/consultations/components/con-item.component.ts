import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassifiersService, ConsultationService, TitleService } from '../../../services';

import { Consultation } from '../../../models';

@Component({
  selector: 'con-item',
  template: require('./con-item.component.jade')
})
export class ConItemComponent implements OnInit {
  constructor(
    private classifiers: ClassifiersService,
    private consultations: ConsultationService,
    private route: ActivatedRoute,
  private titleService: TitleService) {
    this.model = new Consultation();
    this.rooms = [];
  }

  @Input() lecturerId: string = '3e4fdadc-cad6-4475-9d0a-2d752a796ca8';
  @Input() id: string = null;
  model: Consultation;
  rooms: any[];
  type: string = "add";
  selectedRoom: string;

  public ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.type = data["type"];
      this.titleService.setTitle(`consultations ${this.type}`);
    });
    this.route.params.subscribe(params => {
      this.model.id = params["id"];
      this.setupForm()
    });
    this.classifiers.getRooms().subscribe(
      rooms => this.rooms = rooms);
    this.model.lecturerId = this.lecturerId;
  }

  private setRoom(room: string): void {
    this.model.roomId = room;
  }

  private save(): void {
    if (this.type == "add") {
      this.consultations.addConsultation(this.model).subscribe();
    }
    else {
      this.consultations.updateConsultation(this.model).subscribe();
    }
  }

  private setupForm(): void {    
    if (this.type == "edit" ) {
      this.consultations.getConsultation(this.model.id).subscribe(consultation => {
        this.model = consultation;
        this.selectedRoom = consultation.roomId;        
      });
    }
  }
}
