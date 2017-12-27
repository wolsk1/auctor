import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {
    Room,
    Course
} from './../models';
import { ServiceUtils } from './';
import { SettingsService } from './settings.service';
import { HttpService } from './http.service';

@Injectable()
export class ClassifiersService extends HttpService {
    constructor(
        http: Http,
        settingsService: SettingsService) {
        super(http, settingsService);
    }

    public getRooms(): Observable<Room[]> {
        return this.cacheWrapper<Room[]>('db/rooms', 'rooms');
    }

    public getCourses(): Observable<Course[]> {
        return this.cacheWrapper<Course[]>('db/courses', 'courses');
    }    
}
