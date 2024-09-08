export function inspecionarMetodo() {
    return function (target, properKey, descriptor) {
        const metohodOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- O Método ${properKey}.`);
            console.log(`------possui como parâmetros: ${JSON.stringify(args)}.`);
            const retorno = metohodOriginal.apply(this, args);
            console.log(`--------- O retorno foi de: ${JSON.stringify(retorno)}.`);
            return retorno;
        };
        return descriptor;
    };
}
