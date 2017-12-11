import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SettingsService } from './settings.service';
import { HttpService } from './http.service';

@Injectable()
export class TitleService {
    constructor(
        private settingsService: SettingsService,
        private titleService: Title) { }

    public setTitle(pageName: string): void {
        this.titleService.setTitle(`${pageName} | ${this.settingsService.appName}`);
    }
}
