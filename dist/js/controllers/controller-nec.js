import { Negociacoes } from "../models/lista-negociacoes/lista-negocio.js";
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        //Armazenando os valores dentro dos inputs
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    //Soma:
    adiciona() {
        const negociacao = this.dadosNegociacao();
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());
        this._negociacoes.lista().pop;
    }
    //Criando método para add o valor que tem lá dentro com o console.log:
    dadosNegociacao() {
        const exp = /-/g;
        const data = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        const negocia = new Negociacao(data, quantidade, valor);
        this.limparForm();
        return negocia;
    }
    limparForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
