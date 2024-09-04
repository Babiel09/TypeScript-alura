import { Negociacoes } from "../models/lista-negociacoes/lista-negocio.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoesview } from "../views/negociacoes-view.js";
export class NegociacaoController {
    //Agora vou colocar aqui dentro um elemento privado para o meu controller executar o "NegociacaoFeita":
    constructor() {
        this.negociacoes = new Negociacoes();
        //Aqui agora no controller eu vou colocar o elemento do D.O.M. que eu vou modificar
        this.view = new Negociacoesview('#negociacoes-view'); //O id da minha diva que será modificada
        //Armazenando os valores dentro dos inputs
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.view.update(this.negociacoes);
    }
    //Soma:
    adiciona() {
        const negociacao = this.dadosNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.view.update(this.negociacoes);
        this.limparForm();
    }
    //Criando método para add o valor que tem lá dentro com o console.log:
    dadosNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negocia = new Negociacao(data, quantidade, valor);
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
