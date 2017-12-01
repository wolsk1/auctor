import { LabelElement } from '.';

export class MapMarker {
    constructor(public latitude: number,
        public longitude: number) { }
    public title: string;
    public disableAutoPan: boolean = false;
    public infoTexts: LabelElement[] = [];
}
