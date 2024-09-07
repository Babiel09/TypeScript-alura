export function velocidadeDecorator():any{
    return function(
        target: any, //O target é a função construtora em um método estático, Caso ele não estiver em um método estático, ele vai ser um prototype
        propertyKey: string,//Serve para pegar o nome do método.
        descriptor: PropertyDescriptor //Ele sabe de tudo do método que a gente quer executar.
    //O comportamento que eu quero ficará no descriptor
    ) {
        const metodoOriginal = descriptor.value;
        //Começando a modificar o descriptor:
        descriptor.value = function(...args: Array<any>){ //O args transforma todos os parâmetros dos métodos em array
                                                        //Por esse mótivo que o args é um "Array<any>"
            //Pegando o primeiro parâmetro para ver o tempo de execução:
            const t1 = performance.now();
            //Aqui eu também vou chamar o método original:
                const retornoDoMetodo = metodoOriginal.apply(this, args); //O "apply" guarda todos os parametros do método no array.
            //Pegando o último parâmetro para ver o tempo de execução:  
            const t2 = performance.now();
            //Fazendo mostrar a velocidade no console:
            console.log(`A velocidade de execução do ${propertyKey} foi de: ${(t1-t2)/1000}segundos`);

        };
        return descriptor;
    }
};