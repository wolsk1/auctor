import * as _ from 'lodash';
import {
    Component,
    OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TitleService } from '../../services';

@Component({
    selector: 'default',
    template: require('./default.component.jade')
})
export class DefaultComponent implements OnInit {
    public constructor(private titleService: TitleService) { }

    public ngOnInit(): void {
        this.titleService.setTitle('Sākums');
    }

    private searchOptions: SearchOptions[] = [
        { id: "1", name: "Vārds/Uzvārds"},
        { id: "2", name: "Amats"},
        { id: "3", name: "Struktūrvienība"}        
    ];
    private defaultSearchOption: string = "1";

    private setSearchOption(option: string) {
        
    }
}

class SearchOptions {
    public id: string;
    public name: string;
}
