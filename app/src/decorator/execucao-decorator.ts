export function velocidadeDecorator(emSegundos:boolean = true):any{
    return function(
    target: any,
    properKey: string,
    descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        let divisor:number = 1;
        let unidade:string = "milisegundos";
        if(emSegundos === true){
            divisor = 1000;
            unidade = "segundos";
        };
        descriptor.value = function(...args:Array<any>){
            //Vai pegar o tempo de execução antes do método
            const t1 = performance.now();
            metodoOriginal.apply(this, args);
            //vai pegar o tempo de execução depois do método
            const t2 = performance.now();
            //Mostrando no console o resultado:
            console.log(`O método ${properKey}, demorou ${(t2-t1)/divisor} ${unidade} para acontecer.`)
        };

        return descriptor

    }
}