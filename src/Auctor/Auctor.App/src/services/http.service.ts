import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { ServiceUtils } from './service.utils';
import { SettingsService } from './settings.service';

export class HttpService {
    constructor(
        protected http: Http,
        protected settingsService: SettingsService) { }

    private baseApiUrl: string = `${this.settingsService.apiPath}/configuration`;

    public cacheWrapper<T>(
        apiMethod: string,
        cache: string,
        cacheableObservable: string): Observable<T> {
        if (this[cache]) {
            return Observable.of(this[cache]);
        }
        else if (this[cacheableObservable]) {
            return this[cacheableObservable];
        }

        this[cacheableObservable] = this.http.get(`${this.baseApiUrl}/${apiMethod}`)
            .map((response: Response) => this[cache] = response.json())
            .catch(ServiceUtils.handleError)
            .share();

        return this[cacheableObservable];
    }
}