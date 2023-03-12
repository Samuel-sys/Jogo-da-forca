export class Forca {
    static hp = 6;
    #thema
    #word
    #endGame

    constructor(thema, word) {
        this.#thema = thema.toUpperCase();
        this.#word = word.toUpperCase();
        this.#endGame = false;
    }

    renderGame() {
    }

    get word() { return this.#word }
    get thema() { return this.#thema }
    get characters() { return [...this.#word] }
    

    checkEndGame() {
        if (this.hp >= 0) {
            this.#endGame = true;
            alert('O jogo acabou');
        }
    }
}