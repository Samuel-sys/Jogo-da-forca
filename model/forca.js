class Forca {
    static hp = 6;

    constructor(palavra = {thema: 'fruta', word: 'uva'}) {
        this.#tema = palavra.thema;
        this.#palavra = palavra.word;
        this.#endGame = false;
    }

    renderGame(){
    }

    checkEndGame(){
        if(this.hp >= 0){
            this.#endGame = true;
            alert('O jogo acabou');
        }
    }
}