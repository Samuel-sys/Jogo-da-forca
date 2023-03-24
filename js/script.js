import { palavras } from "../data/palavras.js";
import { Forca } from "../model/forca.js";


var a = [...palavras];
const $tema = document.querySelector('#tema');
const $palavra = document.querySelector('#palavra');
const $forca = document.querySelector('#forca');
const $movimentos = document.querySelector('#movimentos');
const $restart = document.querySelector("#restart");
$restart.addEventListener('click', CarregaNome);

//Objeto com o a palavra e o tema
let forca = new Forca("", "");

window.onload = function () {
    CarregaNome();
}

function CarregaNome() {
    let i = Math.floor(Math.random() * palavras.length);;
    console.log('i', i)
    forca = new Forca(palavras[i].tema, palavras[i].palavra);
    rederWord();
}

function rederWord() {

    //Colocamos tema da palavra chave
    if ($tema.innerHTML != forca.thema) { $tema.innerHTML = forca.thema; }

    $palavra.innerHTML = '';

    //Puxamos uma lista com todos os caracteres da palavra chave
    let word = forca.characters;
    word.forEach((character) => {
        //criamos uma palavra chave para cada caracter da palavra
        let element = document.createElement('span');
        element.classList.add('letra');
        element.innerHTML = character;
        $palavra.appendChild(element);
    });

    $movimentos.innerHTML = forca.moves.join(", ");
}

window.onkeyup = function (x) {
    if (x.key.length != 1 || parseInt(x.key) || x.key == '0' || x.key == ' ') {
        //Não e uma letra
    }
    else {
        forca.move(x.key);
        rederWord();
    }
    $forca.src = `./img/forca-${forca.hp}.png`;
}