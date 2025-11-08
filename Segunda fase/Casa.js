import { Personaje2 } from "./Personajes especiales/personaje2.js";

export class Casa{
    #nombre;
    #lema;
    #miembros;

constructor(nombre='', lema=''){
    this.#nombre=nombre;
    this.#lema=lema;
    this.#miembros=[];

}

set setnombre(nombre){
    this.#nombre=nombre;
}
get getnombre(){
    return this.#nombre;
}
set setlema(lema){
    this.#lema=lema;
}
get getlema(){
    return this.#lema;
}
get getmiembros(){
    return this.#miembros;
}


agregarMiembro(personaje) {
        if (personaje instanceof Personaje2) {
            this.#miembros.push(personaje);
        } else {
             console.log("Solo se pueden agregar objetos Personaje.");
        }
}

listarMiembros(){
    console.log('Miembros de la casa ' +this.#nombre);
    this.#miembros.forEach((miembro)=>{
        console.log('- ' +miembro.nombre)
    });

    }
}

