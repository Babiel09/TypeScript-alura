import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController{
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputValor: HTMLInputElement   
    
    constructor(){
        //Armazenando os valores dentro dos inputs
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
    }

    //Criando método para add o valor que tem lá dentro com o console.log:
    Dadosnegociacao(): void{
        const exp = /-/g
        const data = new Date(this._inputData.value.replace(exp, ','))
        const quantidade = parseInt(this._inputQuantidade.value)
        const valor = parseFloat(this._inputValor.value)
        const negocia = new Negociacao(data, quantidade, valor)
        console.group(negocia);
        this.limparForm()
    }
    
    limparForm(): void{
        this._inputData.value = ''
        this._inputQuantidade.value = ''
        this._inputValor.value = ''
        this._inputData.focus()
    }
}
