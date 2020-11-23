import Post from '../post'
import template from '../template'

export default class App {
    constructor(postsDOM) {
        this.postsDOM = postsDOM
        this.baseURL = "http://localhost:3000"
    }

    async createPost(newPost) {
       await fetch(`${this.baseURL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
    }

    async fetchPosts() {
        let response = await fetch(`${this.baseURL}/posts`)
        let data = await response.json()

        return data.map(post => new Post(post.id, post.title, post.author, post.content))
    }

    createFormListener() {
        document.querySelector('form').addEventListener("submit", async event => {
            event.preventDefault()
        
            let formData = new FormData(event.target)
        
            await this.createPost(Object.fromEntries(formData))
            
            this.showPosts()

            event.target.querySelectorAll('input, textare').forEach(input => input.value = '')
            //document.querySelectorAll('form input, form textarea').forEach(input => input.value = '')
        })
    }

    createRemoveListener() {
        this.postsDOM.addEventListener("click", event => {
            if (typeof event.target.dataset.id !== "undefined") {
                fetch(`${this.baseURL}/posts/${event.target.dataset.id}`, {
                    method: "DELETE"
                }).then(_ => this.showPosts())
            }
        })
    }

    showPosts() {
        let content = ""

        this.fetchPosts().then(posts => {
            posts.forEach(post => content += template(post))
            this.postsDOM.innerHTML = content
        })
    }

    run() {
        this.createFormListener()
        this.createRemoveListener()
        this.showPosts()
    }
}