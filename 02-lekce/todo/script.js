// První část To-do

// ---- řešení
let prvniSeznam = document.querySelector("#prvni");

prvniSeznam.addEventListener("click", function(event) {
    if (event.target.tagName == "A") {
        event.target.parentElement.classList.add("barvicka")
    }
})
// ---- řešení

// Druhá část To-do
// querySelectorAll
// innerHTML
// forEach

const seznam = [
    "Prádlo",
    "Odpadky",
    "Nádobí",
    "Nákup",
    "Netflix"
];

// --- řešení
let druhy = document.querySelector("#druhy")
druhy.addEventListener("click", function() {
    if (event.target.tagName == "A") {
        event.target.parentElement.classList.add("barvicka")
    }
})

seznam.forEach(function(polozka) {
    druhy.innerHTML += `<li><a href="#">${polozka}</a></li>`
})

// --- řešení