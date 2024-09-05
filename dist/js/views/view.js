export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
    }
    ;
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            this.escapar = this.escapar;
        }
        ;
        this.elemento.innerHTML = template;
    }
    ;
}
;
