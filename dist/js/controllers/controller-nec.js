export class NegociacaoController {
    constructor() {
        //Armazenando os valores dentro dos inputs
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    //Criando método para add o valor que tem lá dentro com o console.log:
    soma() {
        console.group(this._inputData, this._inputQuantidade, this._inputValor);
    }
}
