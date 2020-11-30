import Post from '../post'
import template from '../template'

export default class App {
    constructor(postsDIV, formDOMElement) {
        this.postsDIV = postsDIV
        this.formDOMElement = formDOMElement
        this.baseURL = "http://localhost:3000"
    }

    async createPost(newPost) {
        let response = await fetch(`${this.baseURL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
    
        let data = await response.json()
        return new Post(data.id, data.title, data.author, data.content)
    }

    createFormListener() {
        this.formDOMElement.addEventListener("submit", async event => {
            event.preventDefault()
        
            let formData = new FormData(event.target)
        
            await this.createPost(Object.fromEntries(formData))
            this.showPosts()

            this.
                formDOMElement.
                querySelectorAll("input, textarea").
                forEach(input => input.value = "")
        })
    }

    async showPosts() {
        let response = await fetch(`${this.baseURL}/posts`)
        let data = await response.json()

        data = data.map(post => new Post(post.id, post.title, post.author, post.content))

        let content = ""

        data.forEach(post => content += template(post))

        this.postsDIV.innerHTML = content
    }

    createRemoveListener() {
        this.postsDIV.addEventListener("click", event => {
            if (event.target.dataset.id !== "undefined") { // tlacitko Smazat
                fetch(`${this.baseURL}/posts/${event.target.dataset.id}`, {
                    method: "DELETE"
                }).then(_ => this.showPosts())
            }
        })
    }

    run() {
        this.createFormListener()
        this.showPosts()
        this.createRemoveListener()
    }
}