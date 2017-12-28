import { CommonUtils } from '../common-utils';

export class Event {
  constructor(){
    this.validFrom = new Date();
    this.validTill = CommonUtils.addDays(this.validFrom, 30);
    this.value = 5;
    this.needLecturer = true;
  }

  public id: string;
  public name: string[];
  public validFrom: Date;
  public validTill: Date;
  public courseId: string;
  public value: number;
  public lecturerId: string;
  public needLecturer: boolean;
}