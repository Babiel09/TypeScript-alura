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
            const metodoOriginal = (this, args);
            const t2 = performance.now();
            console.log(`O método ${properKey}, demorou ${(t1 - t2) / divisor} ${unidade} para acontecer.`);
        };
        return descriptor;
    };
}
