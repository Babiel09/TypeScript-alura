import { NegociacaoController } from './controllers/controller-nec.js';
const controller = new NegociacaoController;
//Criando o formulário:
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.dadosNegociacao();
});
//Abaixo está meu estudo de matemática:
//f(x) = 2x + a
function funcaoPrimeiroGrau(x, a) {
    return 2 * x + a;
}
;
var a = 60;
const testedeX = [6, -8, 7];
testedeX.forEach(x => {
    const resultado = funcaoPrimeiroGrau(a, x);
    console.log(resultado);
});
