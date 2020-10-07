/*
    beforebegin - before element
    afterbegin - first child
    beforeend - last child
    afterend - after element
*/

/*
let place = document.querySelector("#place");
let novejElement = document.createElement("p");
novejElement.innerHTML = "anjgsabghjs <strong>ghjsbfjhgbjhs</strong>"

place.appendChild(novejElement);
*/

let place = document.querySelector("#place");
let novejElement = document.createElement("div");
novejElement.id = "box"

place.insertAdjacentElement("beforeend", novejElement)