//Criando um view para o usuário conseguir ver os valores da sua negociação.
export class Negociacoesview {
    //Esse método vai me retornar os dados da negociação do usuário, de um modo que isso seje visivél.
    visualizando() {
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
        </table>
        `;
    }
}
