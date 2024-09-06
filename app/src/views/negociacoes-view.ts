import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
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
                                ${"R$"+this.formatarValor(negociacao.valor)}
                            </td>
                        </tr>   
                    `;
                }).join('')}
            </tbody>
        </table>    
        `;
    }
    //Diminuindo o tamnho do código:
    private formatarData(data: Date): string{
        return new Intl.DateTimeFormat().format(data);//Simplificando a parte da Data
    };

    //Simplificando a parte da quantidade:
    private formatarQuantidade(quantidade:number): number{
        return quantidade
    };
    //Simplificando a parte do valor:
    private formatarValor(valor:number): number{
        return valor
    };
}