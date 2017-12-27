import * as _ from 'lodash';
import { Constants } from './constants';
import {
    ElementDimensions,
    TranslatedResource,
    KeyValuePair
} from './models';

export class CommonUtils {

    public static isObjectEmpty(map): boolean {
        for (var key in map) {
            return !map.hasOwnProperty(key);
        }
        return true;
    }

    public static compareIgnoreCase(firstString: string, secondString: string): boolean {
        var regex = new RegExp(`^${firstString}$`, 'i');

        return regex.test(secondString);
    }

    public static getContainerDimensions(contentElement: any): ElementDimensions {
        return {
            height: contentElement.clientHeight,
            width: contentElement.clientWidth
        };
    }

    public static getMinutesString(date: Date): string {
        return (!!date)
            ? date.getMinutes() < 10
                ? '0' + date.getMinutes()
                : date.getMinutes().toString()
            : '00';
    };
    public static getHoursString(date: Date): string {
        return (!!date)
            ? date.getHours() < 10
                ? '0' + date.getHours()
                : date.getHours().toString()
            : '00';
    };
}
