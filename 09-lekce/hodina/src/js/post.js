export default class {
    constructor(id, title, author, content) {
        this._id = id
        this._title = title
        this._author = author
        this._content = content
    }

    get title() { return this._title }
    get author() { return this._author }
    get content() { return this._content }
}