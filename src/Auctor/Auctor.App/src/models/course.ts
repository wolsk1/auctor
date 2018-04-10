import { Lecturer } from './lecturer';

export class Course {
  public id: string;
  public name: string;
  public code: string;
  public summary: string;
  public scholars: Lecturer[];
}