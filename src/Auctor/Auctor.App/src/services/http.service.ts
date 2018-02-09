import { Observable } from 'rxjs';
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { ServiceUtils } from './service.utils';
import { SettingsService } from './settings.service';
import { retry } from 'rxjs/operators/retry';

export class HttpService {
    constructor(
        protected http: Http,
        protected settingsService: SettingsService) { }

    /**
     * Wrapper for observable
     *
     * @apiMethodPath api method path
     * @storeName name used to store got values     
     */
    public cacheWrapper<T>(
        apiMethodPath: string,
        storeName: string): Observable<T> {

        var cache: string = `${storeName}Cache`;
        var cacheableObservable: string = `${storeName}Observable`;

        if (this[cache]) {
            return Observable.of(this[cache]);
        }
        else if (this[cacheableObservable]) {
            return this[cacheableObservable];
        }

        this[cacheableObservable] = this.http.get(`${this.settingsService.apiPath}/${apiMethodPath}`)
            .map((response: Response) => this[cache] = response.json())
            .catch(this.handleError)
            .share();

        return this[cacheableObservable];
    }

    public postCachedWrapper<TInput, T>(
        apiMethodPath: string,
        storeName: string,
        data: TInput): Observable<T> {

        var cache: string = `${storeName}Cache`;
        var cacheableObservable: string = `${storeName}Observable`;

        if (this[cache]) {
            return Observable.of(this[cache]);
        }
        else if (this[cacheableObservable]) {
            return this[cacheableObservable];
        }

        this[cacheableObservable] = this.http.post(`${this.settingsService.apiPath}/${apiMethodPath}`, data)
            .map((response: Response) => this[cache] = response.json())
            .catch(this.handleError)
            .share();

        return this[cacheableObservable];
    }

    /**
     * Post wrapper
     * @param apiMethodPath api method path
     * @param data data to be sent
     */
    public wrappedPost<T>(
        apiMethodPath: string,
        data: any): Observable<T> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.post(
            `${this.settingsService.apiPath}/${apiMethodPath}`,
            body,
            options)
            .map((response: Response) => {
                return response.json();
            });
    }

    /**
     * Error handling
     * @param response http response variable
     */
    public handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message
                ? error.message
                : error.toString();
        }

        console.error(errMsg);

        return Observable.throw(errMsg);
    }
}