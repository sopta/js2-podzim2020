import '../css/style.css';
import Post from './post'
import template from './template'

let posts = document.querySelector('#posts')

// 1. načíst články po zapnutí stránky
// 2. načíst všechny články po vložení nového
// 3. načíst články když jeden z nich smažu

document.querySelector('form').addEventListener("submit", async event => {
    event.preventDefault()

    let formData = new FormData(event.target)

    let post = await createPost(Object.fromEntries(formData))

    // col-md-3 mt-2
    let postCol = document.createElement('div')
    postCol.classList.add('col-md-3')
    postCol.classList.add('mt-2')

    postCol.innerHTML = template(post)

    posts.appendChild(postCol)
})


// async/await funkce
async function createPost(newPost) {
    let response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })

    let data = await response.json()
    return new Post(data.id, data.title, data.author, data.content)
}