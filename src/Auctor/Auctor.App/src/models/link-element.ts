export class LinkElement {
    constructor(
        public title: string,
        public hyperlink: string,
        public text: string)
    { }
    public target: string = "_blank";
    public sequence: number;
}
