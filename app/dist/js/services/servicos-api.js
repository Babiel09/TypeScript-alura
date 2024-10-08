import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados').then(res => {
            return res.json();
        })
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
;
//# sourceMappingURL=servicos-api.js.map