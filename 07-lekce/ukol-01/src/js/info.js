export default class Info {
    constructor(key, value) {
        this._key = key;
        this._value = value;
    }

    get key() { return this._key }
    get value() { return this._value }
}