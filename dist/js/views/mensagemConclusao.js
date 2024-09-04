export class NegociacaoFeita {
    //Criando o constructor para esse elemento:
    constructor(seletor) {
        //Pegando o seletor para poder introduzir a mensagem
        this.elemento = document.querySelector(seletor);
        if (this.elemento) {
            this.elemento = this.elemento;
        }
        else {
            throw new Error(`Elemento com seletor "${seletor}" não foi encontrado.`);
        }
    }
    //Criando o método para o template:
    //Model vai ser uma string, pois a mensagem que eu vou passar é uma string
    template(model) {
        return `
        <p class= "alert alert-info">${model}</p>
        
        `;
    }
    //Criando o update do template:
    //por de baixo dos panos o update coloca meu parágrafo dentro da página.
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
