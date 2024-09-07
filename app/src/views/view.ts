import {velocidadeDecorator} from '../decorator/decorator.js'

export abstract class View<T> {


    protected elemento: HTMLElement;
    private escapar = false;
    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
    };
    @velocidadeDecorator()
    public update(model: T): void {
        //testando a performance do "update"no começo:
        let template = this.template(model);  
        if(this.escapar){
            this.escapar = this.escapar;
        };
        this.elemento.innerHTML = template;
        //Testando a velocidade do "update" no fianl:
    };
//Para fazer com que ninguém fora das filhas e/ou da mãe possa acessar o template para não o modificar, eu utilizo:
    protected abstract template(model: T): string;
        //Com o "protect abstract" somente as filhas dessa classe mãe podem acessar o template, 
            //o grande problema que aqui na classe mãe o template está protegido, mas na classe filha não.
                //Para evitar isso eu devo colocar protected em todas as classes filhas
};