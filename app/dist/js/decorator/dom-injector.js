export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                return document.querySelector(seletor);
            }
            else {
                alert("Deu um erro cara, se código EXPLODIU!");
            }
            ;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
