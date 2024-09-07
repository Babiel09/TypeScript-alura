export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {};

    get volume(): number {
        return this.quantidade * this.valor;
    };

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    };

        //Um método estático mostra que todas as filhas da classe mãe "Negociacao" podem acessar o determinado método
        //definido como estático.
    public static criaDe(dataString: string, quantidadeString: string, valorString:string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    };
}