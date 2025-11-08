import { Casa } from "../Casa.js";


export class Personaje2{
    #nombre;
    #age;
    #estado;
    #casaArray;
    

constructor(nombre='', age='', estado=''){
    this.#nombre=nombre;
    this.#age= age;
    this.#estado= estado;
    this.#casaArray=[];
    
}
set setnombre(nombre){
    this.#nombre=nombre;
}
get getnombre(){
    return this.#nombre;
}
get getage(){
    return this.#age;
}
set setage(age){
    this.#age= age;
}
get getestado(){
    return this.#estado;
}
set setestado(estado){
    this.#estado= estado;
}
get getcasasArray(){
    return this.#casaArray;
}



 agregarCasa(casa){
    if (casa instanceof Casa){
        this.#casaArray.push(casa);
        console.log(this.#nombre);
    }
}
 

mensajePresent() {
  console.log('Soy ' +this.#nombre + ' de la Casa' +this.agregarCasa());
}




}

