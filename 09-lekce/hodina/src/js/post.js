export default class Post {
    constructor(id, title, author, content) {
        this._id = id
        this._title = title
        this._author = author
        this._content = content
    }

    get id() { return this._id }
    get title() { return this._title }
    get author() { return this._author }
    get content() { return this._content }
}