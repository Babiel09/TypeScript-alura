import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Seu código possui um erro!");
}
;
const importar = document.querySelector('#botãoimportador');
if (importar) {
    importar.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw Error("Algo deu errado, verifique seu código.");
}
;
//# sourceMappingURL=app.js.map