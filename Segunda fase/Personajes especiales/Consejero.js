import { Personaje2 } from "./personaje2.js";

export class Consejero extends Personaje2{
    #especialidad;



constructor(nombre='', edad='', estado='', especialidad=''){
super(nombre, edad, estado)
this.#especialidad=especialidad;

}

get getEspecialidad(){
    return this.#especialidad;
}
set setEspecialidad(especialidad){
    this.#especialidad=especialidad;
}

lucharConsej(){

    console.log(this.getnombre + ' no lucha con armas, sino con palabras e inteligencia.');

}
aconsejar(){
    console.log(this.getnombre + ' aconseja no luchar');
}

}





