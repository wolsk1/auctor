import {
    Component,
    OnInit,
    Input
  } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  
  import { ClassifiersService, EventService, TitleService } from '../../../services';  
  import { Event, Course } from '../../../models';
  
  @Component({
    selector: 'event',
    template: require('./event.component.jade')
  })
  export class EventComponent implements OnInit {
    constructor(
      private classifiers: ClassifiersService,
      private events: EventService,
      private route: ActivatedRoute,
    private titleService: TitleService) {
      this.model = new Event();
      this.courses = [];
    }
  
    lecturerId: string = '3e4fdadc-cad6-4475-9d0a-2d752a796ca8';
    id: string = null;
    model: Event;
    courses: Course[];
    type: string = "add";
    selectedCourse: string;
  
    public ngOnInit(): void {
      this.route.data.subscribe(data => {
        this.type = data["type"];
        this.titleService.setTitle(`events ${this.type}`);
      });
      this.route.params.subscribe(params => {
        this.model.id = params["id"];
        this.setupForm()
      });
      this.classifiers.getCourses().subscribe(
        courses => this.courses = courses);
      this.model.lecturerId = this.lecturerId;
    }

    private save(): void {
      if (this.type == "add") {
        this.events.add(this.model).subscribe();
      }
      else {
        this.events.update(this.model).subscribe();
      }
    }
  
    private setupForm(): void {    
      if (this.type == "edit" ) {
        this.events.find(this.model.id).subscribe(event => {
          this.model = event;
          this.selectedCourse = event.courseId;                
        });
      }
    }

    private setCourse(course: string): void {
      this.model.courseId = course;
    }
  }
  