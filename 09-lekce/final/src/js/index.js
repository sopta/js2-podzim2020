import '../css/style.css';
import App from './blog/app'

let postDOM = document.querySelector('#posts')

const app = new App(postDOM)
app.run() // bootstrap

// 1. načíst články po zapnutí stránky
// 2. načíst všechny články po vložení nového
// 3. načíst články když jeden z nich smažu

// trida Filter
