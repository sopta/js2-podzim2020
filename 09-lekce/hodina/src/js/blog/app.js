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
        
            let post = await this.createPost(Object.fromEntries(formData))
        
            // col-md-3 mt-2
            let postCol = document.createElement('div')
            postCol.classList.add('col-md-3')
            postCol.classList.add('mt-2')
        
            postCol.innerHTML = template(post)
        
            this.postsDIV.appendChild(postCol)
        })
    }

    async showPosts() {
        let response = await fetch(`${this.baseURL}/posts`)
        let data = await response.json()

        let content = ""

        data = data.map(post => new Post(post.id, post.title, post.author, post.content))

        console.log(data)

        this.postsDIV.innerHTML = content
    }

    run() {
        this.createFormListener()
        this.showPosts()
    }
}