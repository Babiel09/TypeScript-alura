export function velocidadeDecorator(emSegundos = true) {
    return function (target, properKey, descriptor) {
        const metodoOriginal = descriptor.value;
        let divisor = 1;
        let unidade = "milisegundos";
        if (emSegundos === true) {
            divisor = 1000;
            unidade = "segundos";
        }
        ;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O método ${properKey}, demorou ${(t2 - t1) / divisor} ${unidade} para acontecer.`);
        };
        return descriptor;
    };
}
//# sourceMappingURL=execucao-decorator.js.map