import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enumaration/dias-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    };

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        if(this.diaUtil && negociacao.data.getFullYear() > 1990){
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();
            alert(202)
            return;
        }else{
            this.mensagemView.update
            ("Negociações só podem ser feitas em dias úteis, ou em anos recentes!") , alert("ERROR 401")
            //Uso o update para facilitar meu processo
        };
    };
    //Para tornar legível a parte do if, eu vou fazer:
    private diaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SÁBADO //Esse método vai me retornar uma booleana (true or false)
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    };

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };

        //Método atualizaView chama o método update para todas as views:
        private atualizaView(): void{
            this.negociacoesView.update(this.negociacoes);           //Dando update na view de negocios
            this.mensagemView.update('Negociação adicionada com sucesso');       //Dando update na view de mensagem
    
        };
}
