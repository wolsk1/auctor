import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import {
    Observable,
    Observer
} from 'rxjs';
import 'rxjs/add/operator/share';
import { KeyValuePair } from '../models';

@Injectable()
export class SettingsService {
    constructor() {
        this.onInit();
    }

    private settings: Settings;
    private settingsObserver: Observer<Settings>;

    public version: string;
    public basePath: string;
    public apiPath: string;
    public country: string;
    public countryLinks: CountrySettings;
    public connectionProtocol: string;
    public appName: string;

    public update: Observable<Settings>;

    public updateProduct(newValue: string): void {
        if (this.settings.product == newValue) {
            return;
        }

        this.settings.product = newValue;
        this.notifySubscribers();
    }

    public updateLanguage(newValue: KeyValuePair): void {
        if (this.settings.language == newValue) {
            return;
        }

        this.settings.language = newValue;
        this.notifySubscribers();
    }

    public getProduct(): string {
        return this.settings.product;
    }

    public getLanguage(): KeyValuePair {
        return this.settings.language;
    }

    private notifySubscribers() {
        if (!this.settingsObserver) {
            return;
        }
        this.settingsObserver.next(this.settings);
    }

    private onInit() {
        try {
            _.assign(this, _appSettings);
        } catch (ex) {
            console.log((<Error>ex).message);
        }

        this.update = new Observable<Settings>(observer => {
            this.settingsObserver = observer;
            this.settings = {
                product: "",
                language: new KeyValuePair("en", "english")
            };
            this.notifySubscribers();
        }).share();
    }
}

export declare type Settings = {
    language: KeyValuePair;
    product: string;
}

export declare type CountrySettings = {
    latvia: string;
    lithuania: string;
    estonia: string;
}
