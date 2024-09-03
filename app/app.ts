import { NegociacaoController } from './controllers/controller-nec.js';

const controller = new NegociacaoController
//Criando o formulário:

const form = document.querySelector('.form')
form.addEventListener('submit', event=>{
    event.preventDefault()
    controller.dadosNegociacao()
})

//Abaixo está meu estudo de matemática:

//f(x) = 6x + a

function funcaoDoprimeroGrau(x:number, a:number):number{
    return 2*x+a
};

var a = 90;

//Eu poderia só fazer a variável com x, mas prefiro complicar hehe

const todososX = [3, 89, 2];

todososX.forEach(x=>{
    const resultado = funcaoDoprimeroGrau(a,x)
    console.log(resultado)
});


