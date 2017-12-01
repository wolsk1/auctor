import { OrderedElement } from './ordered-element';

export class KeyValuePair {
    constructor(
        public key: string,
        public value: string) { }
}

export class KeyValuePairOrdered extends OrderedElement {
    public key: string;
    public value: string;
}
