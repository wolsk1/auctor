import { KeyValuePair } from './key-value-pair';

export class KeyCollectionPair {
    constructor(
        public Key: string,
        public Collection: KeyValuePair[]) { }
}

export class KeyCollection<T>{
    constructor(public key: string) {
        this.collection = [];
    }
    public collection: T[];
}
