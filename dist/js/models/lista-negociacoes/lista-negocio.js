//Colocando as informações pegas da negociação do usuário em uma lista
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const listanegociacoes = new Negociacoes();
listanegociacoes.lista().forEach(n => {
    n.data;
    n.quantidade;
    n.valor;
    n.volume;
});
console.log(listanegociacoes);
