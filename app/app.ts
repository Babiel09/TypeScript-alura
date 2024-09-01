import { NegociacaoController } from './controllers/controller-nec.js';

const controller = new NegociacaoController
//Criando o formulário:

const form = document.querySelector('.form')
form.addEventListener('sumbit', event=>{
    event.preventDefault()
    controller.soma()
})