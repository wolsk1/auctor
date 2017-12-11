import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {
    IdCollection
} from './../models';
import { ServiceUtils } from './';
import { SettingsService } from './settings.service';
import { HttpService } from './http.service';

@Injectable()
export class ConfigService extends HttpService {
    constructor(
        http: Http,
        settingsService: SettingsService) {
        super(http, settingsService);
    }

    // public getCountryProducts(): Observable<IdCollection[]> {
    //     return this.cacheWrapper<IdCollection[]>(
    //         'country-products',
    //         'countryProductsCache',
    //         'countryProductsObservable');
    // }
}
