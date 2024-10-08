var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { velocidadeDecorator } from "../decorator/execucao-decorator.js";
import { inspecionarMetodo } from "../decorator/inspecionar.js";
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
__decorate([
    velocidadeDecorator(true),
    inspecionarMetodo()
], View.prototype, "update", null);
;
//# sourceMappingURL=view.js.map