import { Forca } from "../model/forca.js";

const tema = document.querySelector('#tema');
const palavra = document.querySelector('#palavra');

//Objeto com o a palavra e o tema
const forca = new Forca('fruta', 'uva');

window.onload = function () {
    rederWord()
}

function rederWord() {

    //Colocamos tema da palavra chave
    if (tema.innerHTML != forca.thema) { tema.innerHTML = forca.thema; }

    palavra.innerHTML = '';

    //Puxamos uma lista com todos os caracteres da palavra chave
    let word = forca.characters;
    word.forEach((character) => {
        //criamos uma palavra chave para cada caracter da palavra
        let element = document.createElement('span');
        element.classList.add('letra');
        element.innerHTML = character;
        palavra.appendChild(element);
    });
}

window.onkeyup = function (x) {
    if (x.key.length != 1 || parseInt(x.key) || x.key == '0' || x.key == ' ') {
        alert('não e uma letra')
    } else {
        forca.move(x.key);
        rederWord();
    }
}