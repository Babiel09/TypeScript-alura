export function velocidadeDecorator() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retornoDoMetodo = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`A velocidade de execução do ${propertyKey} foi de: ${(t1 - t2) / 1000}segundos`);
        };
        return descriptor;
    };
}
;
