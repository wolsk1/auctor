import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {
    Event
} from './../models';
import { ServiceUtils } from './';
import { SettingsService } from './settings.service';
import { HttpService } from './http.service';

@Injectable()
export class EventService extends HttpService {
    constructor(
        http: Http,
        settingsService: SettingsService) {
        super(http, settingsService);
    }

    public add(event: Event): Observable<Response> {
      return this.wrappedPost<any>('events/add', event);
    }

    public update(event: Event): Observable<Response> {
        return this.wrappedPost<any>('events/update', event);
    }

    public delete(eventId: string): Observable<Response> {
        return this.wrappedPost<any>('events/delete', eventId);
    }

    public find(eventId: string): Observable<Event> {
        return this.wrappedPost<Event>('events/findbyid', eventId);
    }

    public getAll(eventId: string): Observable<Event[]> {
        return this.wrappedPost<Event[]>('events/findbyfield', eventId);
    }
}
