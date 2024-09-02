import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        //Armazenando os valores dentro dos inputs
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    //Criando método para add o valor que tem lá dentro com o console.log:
    Dadosnegociacao() {
        const exp = /-/g;
        const data = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        const negocia = new Negociacao(data, quantidade, valor);
        console.group(negocia);
    }
}
