import {
  Component,
  OnInit
} from '@angular/core';

import { ConItem } from '../models';

@Component({
  selector: 'con-item',
  template: require('./con-item.component.jade')
})
export class ConItemComponent implements OnInit {
  model: ConItem;
  rooms: any[];

  constructor(){
    this.model = new ConItem();
    this.rooms = [];
  }

  public ngOnInit(): void {
      
  }   
}
