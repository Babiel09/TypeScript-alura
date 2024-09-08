//Com esse "decorator", eu quero ver tudo o quê tem no determinado método.
export function inspecionarMetodo():any{
    return function(
        target:any, 
        properKey: string,
        descriptor: PropertyDescriptor
    ){
        //Guardando método original:
        const metohodOriginal = descriptor.value;
//Como eu não sei quantos parâmetros o método vai ter, eu uso o "args" sendo do um "Array"
//que consegue armazenar qualquer atributo(any).
        descriptor.value = function(...args:Array<any>){
            console.log(`--- O Método ${properKey}.`)
            console.log(`------possui como parâmetros: ${JSON.stringify(args)}.`) //Tudo que estiver dentro do "args" deve sofrer o JSON.stringfy!
            const retorno = metohodOriginal.apply(this, args);
            console.log(`--------- O retorno foi de: ${JSON.stringify(retorno)}.`);
            return retorno;
            
        };
        
        
        return descriptor;
    }

}