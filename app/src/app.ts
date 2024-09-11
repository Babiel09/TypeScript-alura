import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form:HTMLFormElement = document.querySelector('.form') as HTMLFormElement;
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
    
}else{
    throw Error("Seu código possui um erro!");
    
};

const importar:HTMLButtonElement =document.querySelector('#botãoimportador')  as HTMLButtonElement;
if(importar){
    importar.addEventListener('click', ()=>{ //Não vou usar o 'event' como no código acima, pois eu quero que o método acione no click
        controller.importarDados();
    }
)
} else {
    throw Error("Algo deu errado, verifique seu código.");
};