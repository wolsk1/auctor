import { Constants } from '../../constants';

export class SelectUtils {

    public static makeSelectText(innerText: string): string {
        var selectTextWrapper: string = "---";

        return `${selectTextWrapper} ${innerText} ${selectTextWrapper}`;
    }
}
