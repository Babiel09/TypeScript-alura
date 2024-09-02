import { Negociacao } from "../models/negociacao";
export class NegociacaoController {
    constructor() {
        //Armazenando os valores dentro dos inputs
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    //Criando método para add o valor que tem lá dentro com o console.log:
    soma() {
        const negociacao = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
    }
}
