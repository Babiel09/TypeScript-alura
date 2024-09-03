import { Negociacoes } from "../models/lista-negociacoes/lista-negocio.js";
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        //Armazenando os valores dentro dos inputs
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    //Soma:
    adiciona() {
        const negociacao = this.dadosNegociacao();
    }
    //Criando método para add o valor que tem lá dentro com o console.log:
    dadosNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negocia = new Negociacao(data, quantidade, valor);
        this.negociacoes.lista();
        this.limparForm();
        console.log(negocia);
        return negocia;
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
