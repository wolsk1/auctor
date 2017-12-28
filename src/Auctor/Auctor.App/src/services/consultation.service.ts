import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {
    Consultation
} from './../models';
import { ServiceUtils } from './';
import { SettingsService } from './settings.service';
import { HttpService } from './http.service';

@Injectable()
export class ConsultationService extends HttpService {
    constructor(
        http: Http,
        settingsService: SettingsService) {
        super(http, settingsService);
    }

    public addConsultation(consultation: Consultation): Observable<Response> {
      return this.wrappedPost<any>('consult/add', consultation);
    }

    public updateConsultation(consulation: Consultation): Observable<Response> {
        return this.wrappedPost<any>('consult/update', consulation);
    }

    public getConsultation(consulationId: string): Observable<Consultation> {
        return this.wrappedPost<Consultation>('consult/findbyid', consulationId);
    }

    public getConsultations(lecturerId: string): Observable<Consultation[]> {
        return this.wrappedPost<Consultation[]>('consult/findbyfield', lecturerId);
    }
}
