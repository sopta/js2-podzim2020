import '../css/style.css';

let htmlUl = `
    <ul class="" data-ahoj="sdajnj">
        <li>${promena}</li>
        <li>${promena}</li>
        <li>${promena}</li>
        <li>${promena}</li>
    <ul>
`

htmlUl += `<p></p>`

document.querySelector("body").innerHTML = htmlUl;

let element = document.createElement("p");
element.textContent = `ahoj moje jmeno je ${jmeno}`;
if (true) {
    element.id = "SDS";
}

if (true) {
    element.dataset.add("ahoj", 333)
}

element.classList.add("classa");

document.querySelector("body").appendChild(element)

let ulStart = "<ul>${promena}"

// vygeruji licka

let ulEnd = "</ul>"