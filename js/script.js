import { Forca } from "../model/forca.js";

const tema = document.querySelector('#tema');
const palavra = document.querySelector('#palavra');

//Objeto com o a palavra e o tema
const forca = new Forca('fruta', 'Laranja');

window.onload = function () {
    rederWord()
}

function rederWord() {

    tema.innerHTML = forca.thema;

    let word = forca.characters; 

    word.forEach((character) => {
        let element = document.createElement('span');
        element.classList.add('letra');
        element.innerHTML = character;
        palavra.appendChild(element);
        console.log('element: ', element)
    });

}