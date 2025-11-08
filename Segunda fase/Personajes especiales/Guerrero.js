import { Personaje2 } from "./personaje2.js"; 
import { Arma } from "../Arma.js";

export class Guerrero extends Personaje2{
    
    #arma=new Arma;

    constructor(nombre='', edad, arma= '') {
        super(nombre, edad);
        this.#arma = arma;
    }

    get getArma(){
        
        return this.#arma;
    }
    set setArma(nuevaArma){
        
        this.#arma = nuevaArma;
    }

    luchar(){

        console.log(this.getnombre + 'ataca con su ' + this.#arma.getNombreArma + ', causando ' +this.#arma.getDano + 'puntos');
    }
    entrenar(){
        console.log(this.getnombre + ' entrena todos los días');
    }


}



