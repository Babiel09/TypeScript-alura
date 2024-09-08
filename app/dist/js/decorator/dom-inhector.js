export function domInhector() {
    return function (target, properKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            return descriptor;
        };
    };
}
