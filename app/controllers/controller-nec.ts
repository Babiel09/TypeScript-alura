import { Negociacoes } from "../models/lista-negociacoes/lista-negocio.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoesview } from "../views/negociacoes-view.js"

export class NegociacaoController{
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement  
    private negociacoes = new Negociacoes()
    //Aqui agora no controller eu vou colocar o elemento do D.O.M. que eu vou modificar
    private view = new Negociacoesview('#negociacoes-view')//O id da minha diva que será modificada
    
    constructor(){
        //Armazenando os valores dentro dos inputs
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.view.update(this.negociacoes)
    }

    //Soma:
    adiciona(): void {
        const negociacao = this.dadosNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.view.update(this.negociacoes)
        this.limparForm()
    }

    //Criando método para add o valor que tem lá dentro com o console.log:
    dadosNegociacao(): Negociacao{
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        const negocia = new Negociacao(data, quantidade, valor)
        this.negociacoes.lista()
        console.log(negocia)
        return negocia
        
    }
    
    limparForm(): void{
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
}
