import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enumaration/dias-da-semana.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    ;
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (this.diaUtil && negociacao.data.getFullYear() > 1990) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();
            alert(202);
            return;
        }
        else {
            this.mensagemView.update("Negociações só podem ser feitas em dias úteis, ou em anos recentes!"), alert("ERROR 401");
            //Uso o update para facilitar meu processo
        }
        ;
    }
    ;
    //Para tornar legível a parte do if, eu vou fazer:
    diaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SÁBADO; //Esse método vai me retornar uma booleana (true or false)
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    ;
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    ;
    //Método atualizaView chama o método update para todas as views:
    atualizaView() {
        this.negociacoesView.update(this.negociacoes); //Dando update na view de negocios
        this.mensagemView.update('Negociação adicionada com sucesso'); //Dando update na view de mensagem
    }
    ;
}
