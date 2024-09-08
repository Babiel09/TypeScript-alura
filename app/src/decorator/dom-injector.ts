export function domInjector(seletor:string):any{ // O seletor é o id do elemento do DOM
    return function(target:any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`);
        //Fazendo com que o properkey pegue o elemento que eu quero do DOM:
        
        //Toda vez que o meu getter chamar ele vai testar se houve algum erro ou não:
        let elemento:HTMLElement | null = null;
        const getter = function(){
            if(!elemento){
            return document.querySelector(seletor)
            } else{
                alert("Deu um erro cara, se código EXPLODIU!")
            };
        };
        Object.defineProperty(target, propertyKey, {get: getter});
    };
}