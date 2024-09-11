import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enumaration/dias-da-semana.js';
import { velocidadeDecorator } from '../decorator/execucao-decorator.js';
import { inspecionarMetodo } from '../decorator/inspecionar.js';
import { domInjector } from '../decorator/dom-injector.js';
import { NegociacoesServices } from '../services/servicos-api.js';

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement ;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    private servicos = new NegociacoesServices();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    };
    @velocidadeDecorator(true)
    @inspecionarMetodo()
    public adiciona(): void {
        //Fazendo a mesma coisa para o adicona.
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
            );
        if(this.diaUtil(negociacao.data)){ //Aqui precisa pegar o valor da data para o código funcionar
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();
            alert(201)
            return; 
        }else{
            alert("Negociações só podem ser feitas em dias úteis.")
            this.mensagemView.update("Negociações só podem ser feitas em dias úteis.");
            //Uso o update para facilitar meu processo
        };
        
    };
    //Para tornar legível a parte do if, eu vou fazer:
    private diaUtil(data: Date): boolean{
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO //Esse método vai me retornar uma booleana (true or false)
    };
    private limparFormulario(): void {
        document.querySelector('#reiniciar')
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        this.mensagemView.update('Negociação reiniciada');

    };

        //Método atualizaView chama o método update para todas as views:
        private atualizaView(): void{
            this.negociacoesView.update(this.negociacoes);           //Dando update na view de negocios
            this.mensagemView.update('Negociação adicionada com sucesso');       //Dando update na view de mensagem
    
        };


        public importarDados():void {
            this.servicos.obterNegociacoes()
            .then(negociosDeHoje=>{
                for(let negociacao of negociosDeHoje) [
                    this.negociacoes.adiciona(negociacao)
                ]
                this.negociacoesView.update(this.negociacoes);
            })
        };
};
