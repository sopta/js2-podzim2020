import '../css/style.css';
import App from './blog/app'

let posts = document.querySelector('#posts')
let formElement = document.querySelector('form')

let app = new App(posts, formElement)
app.run() // spustime nasi aplikaci

// 1. načíst články po zapnutí stránky
// 2. načíst všechny články po vložení nového
// 3. načíst články když jeden z nich smažu
