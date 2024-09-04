import { NegociacaoController } from './controllers/controller-nec.js';
//Importando o controller   
const controller = new NegociacaoController
//Criando o formulário:

const form = document.querySelector('.form')
form.addEventListener('submit', event=>{
    event.preventDefault()
    controller.dadosNegociacao()
    alert("Negociação efetuada")
})
