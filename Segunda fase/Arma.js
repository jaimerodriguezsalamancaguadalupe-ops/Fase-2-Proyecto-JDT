

export class Arma{
    #nombre;
    #dano;
    #tipo;


constructor(nombre='', dano='', tipo=''){
    this.#nombre= nombre;
    this.#dano= dano;
    this.#tipo= tipo;
}

set setNombre(nombre){
    this.#nombre= nombre;
}
get getNombreArma(){
    return this.#nombre;
}
set setDano(dano){
    this.#dano=dano;
}
get getDano(){
    return this.#dano;
}
set setTipo(tipo){
    this.#tipo= tipo;
}
get getTipo(){
    return this.#tipo;
}

descripcion(){
    console.log(this.#nombre + ' ( ' +this.#tipo + ') - daño: ' +this.#dano);
}
    


}
