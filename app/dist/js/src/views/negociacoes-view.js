import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
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
                            <td>${this.formatarData(negociacao.data)}
                            </td>
                            <td>
                                ${this.formatarQuantidade(negociacao.quantidade)}
                            </td>
                            <td>
                                ${"R$" + this.formatarValor(negociacao.valor)}
                            </td>
                        </tr>   
                    `;
        }).join('')}
            </tbody>
        </table>    
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    ;
    formatarQuantidade(quantidade) {
        return quantidade;
    }
    ;
    formatarValor(valor) {
        return valor;
    }
    ;
}
