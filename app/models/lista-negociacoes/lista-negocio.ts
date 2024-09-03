import { Negociacao } from "../negociacao";


//Colocando as informações pegas da negociação do usuário em uma lista
export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }
    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }
}

const listanegociacoes = new Negociacoes();

listanegociacoes.lista().forEach(n =>{
    n.data
    n.quantidade
    n.valor
    n.volume
})

console.log(listanegociacoes)