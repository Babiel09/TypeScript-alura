//Criando um view para o usuário conseguir ver os valores da sua negociação.
export class Negociacoesview {
    //Nesse seletor eu tenho que guardar o elemento do D.O.M. que eu acabaei pegando
    constructor(seletor) {
        //Com o querySelector eu jogo essa determinada propriedade para o meu D.O.M.
        this.elemento = document.querySelector(seletor);
    }
    //Esse método vai me retornar os dados da negociação do usuário, de um modo que isso seje visivél.
    visualizando(model) {
        //Retornando dentro do método uma declaração de como deve ser a minha tabela.
        return `
        <table class= "table table-hover table-bored">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>?</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
        }).join('')}</th>
                </tr>
            </tbody>
        </table>
        `;
    }
    //Para fazer com que o visualizando se atualize eu crio o seguinte método:
    update(model) {
        const template = this.visualizando(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
