export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void {
        const template = this.template(model);  
        this.elemento.innerHTML = template;
    }
    //Para fazer com que ninguém fora das filhas e do mãe possa acessar o template para não o modificar, eu utilizo:
    protected abstract template(model: T): string;
    //Com o "protect abstract" somente as filhas dessa classe mãe podem acessar o template, 
    //o grande problema que aqui na classe mãe o template está protegido, mas na classe filha não.
    //Para evitar isso eu devo colocar protected em todas as classes filhas
};