import {
    Component,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
    KeyValueDiffers
} from '@angular/core';

import { KeyValuePair } from './../../models';

@Component({
    selector: 'v-select',
    template: require('./select.component.jade')
})
export class SelectComponent {
    constructor() {
        this.selected = new EventEmitter<string>();
        this.displayMember = 'value';
        this.valueMember = 'key';
    }

    @Input() items: any[];
    @Input('init-selected-item') initSelectedKey: string;
    @Input('default-value') defaultValue: string;
    @Input('value-member') valueMember: string;
    @Input('display-member') displayMember: string;
    @Input() id: string;
    @Output() selected: EventEmitter<string>;

    private selectedKey: string;

    public ngOnChanges(changes: SimpleChanges): void {
        var initSelectedKeyChange = changes["initSelectedKey"];
        var defaultChange = changes["defaultValue"];

        if (initSelectedKeyChange) {
            if (this.selectedKey == this.initSelectedKey) {
                return;
            }

            this.selectedKey = this.initSelectedKey;
            this.select();
        }
    }

    public select(): void {
        var emitKey;
        if (this.selectedKey) {
            emitKey = this.selectedKey;
        }
        else {
            emitKey = this.selectedKey = '';
        }

        this.selected.emit(emitKey);
    }
}
