import { NegociacoesDoDia } from "../interfaces/interface-api.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices{

        public obterNegociacoes():Promise<Negociacao[]>     {
            return fetch('http://localhost:8080/dados').then(res=>{
                return res.json()   
                }
            )
            .then((dados:NegociacoesDoDia[])=>{
                return dados.map(dado=>{
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
                }
            )
        }
};