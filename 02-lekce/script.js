// demonstrovat event bubbling

document.querySelector("table").addEventListener("click", function() {
    console.log("table event")
})

document.querySelector("tbody").addEventListener("click", function(event) {
    console.log("tbody event")
    event.stopPropagation()
})

document.querySelector("button").addEventListener("click", function(event) {
    console.log("button event")
    event.stopPropagation()
})
