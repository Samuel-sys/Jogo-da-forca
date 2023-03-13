export class Forca {
    static hp = 6;
    #thema
    #word
    #revealed
    endGame
    #moves

    constructor(thema, word) {
        this.#thema = thema.toUpperCase();
        this.#word = word.toUpperCase();
        this.endGame = false;
        this.#moves = [];
        this.#revealed = [...this.#word.replace(/[a-z]/gi, "_")];
    }

    get thema() { return this.#thema }

    //get da palavra em List (array)
    get #characters() { return [...this.#word] }
    get characters() { return  this.#revealed }

    checkEndGame() {
        if (this.hp >= 0) {
            this.endGame = true;
            alert('O jogo acabou você perdeu');
        } else if (this.#revealed.join('') == this.#word) {
            alert('O jogo acabou você venceu a palavra secreta era ' + this.#word);
            this.endGame = true;
        }
    }

    move(character) {

        //Colocamos a letra em maiusculo para evitar erros bobos de letra maiuscula ou minuscula
        character = character.toUpperCase();

        //Verificamos se esse move já foi feito antes ele para a função aqui
        if (this.#moves.includes(character)) {
            alert('Você já testou essa letra');
            return false;
        } else {
            //adiciona a letra na lista de movimentos já feitos no game
            this.#moves.push(character);
        }

        //Se a letra que o usuario entrou constar na palavra ele inicia uma varredura na palavra para alterar o resultado do jogo
        if (this.#word.includes(character)) {

            //Pega a primeira posição (index) onde a letra aparece para registar na lista de indices
            let posicao = this.#word.indexOf(character);
            let indices = [];

            //Só para de procurar quando não tiver mais essa letra na palavra
            while (posicao !== -1) {
                indices.push(posicao); //adiciona a posição onde foi encontrada a letra
                posicao = this.#word.indexOf(character, posicao + 1); // começa a procurar uma possição a frente da ultima letra encontrada 
            }

            //Passamos por todos os indices encontrados na palavra e mostramos na palavra revelada para o usuario
            indices.forEach(i => this.#revealed[i] = character);

        } else {
            this.hp--;
        }

        this.checkEndGame();
    }
}