import { Personaje2 } from "./personaje2.js";

export class Rey extends Personaje2{

    #aniosReinado;

constructor(nombre, aniosReinado='') {
super(nombre);

this.#aniosReinado= aniosReinado;

}

get getAnosReinado(){
    return this.#aniosReinado;
}
set setAnosReinado(aniosReinado){
    this.#aniosReinado=aniosReinado;
}

gobernar(){
    console.log(this.getnombre + ' gobierna con sabiduría desde hace ' +this.getAnosReinado + ' años')
}

liderar(){
    console.log(this.getnombre + ' lidera la batalla y anima a sus tropas')
}

}





