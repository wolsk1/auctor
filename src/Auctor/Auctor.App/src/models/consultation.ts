import { CommonUtils } from '../common-utils';

export class Consultation {
  constructor(){
    this.date = new Date();
    this.startTime = `${CommonUtils.getHoursString(this.date)}:${CommonUtils.getMinutesString(this.date)}`;
    this.endTime = `${CommonUtils.getHoursString(this.date)}:${CommonUtils.getMinutesString(this.date)}`;
  }

  public id: string;
  public date: Date;
  public startTime: string;
  public endTime: string;
  public roomId: string;
  public lecturerId: string;
}