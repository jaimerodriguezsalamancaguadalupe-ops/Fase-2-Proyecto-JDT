import { Personaje2 } from "./Personajes especiales/personaje2.js";
import { Rey } from "./Personajes especiales/Rey.js";
import { Consejero } from "./Personajes especiales/Consejero.js";
import { Guerrero } from "./Personajes especiales/Guerrero.js";
import { Arma } from "./Arma.js";
import { Casa } from "./Casa.js";
    

const Jon= new Personaje2 ('Jon Snow', 20, 'Stak');
const Trin= new Personaje2 ('Tyrion Listener', 22, 'Listener');
const Robert= new Personaje2 ('Robert Baratherton', 25, 'Listener');

const miRey= new Rey ('Robert Baratheon', 15);

const miCons1= new Consejero ('Tyrion Listener');

const miGuerrero= new Guerrero ('Jon Snow', '', 'Garra', 25);


const miArma1= new Arma ();

const Stak= new Casa (); 
const Lannister= new Casa();



// Presentacion 1
Jon.agregarCasa(Stak);
Jon.mensajePresent();

// Guerrero

miGuerrero.luchar();
miGuerrero.entrenar();

 // Presentacion 2

Trin.agregarCasa(Lannister);
Trin.mensajePresent();

// Consejero
miCons1.lucharConsej();
miCons1.aconsejar();

// Presentacion 3
Robert.agregarCasa(Lannister);
Robert.mensajePresent();
miRey.gobernar();
miRey.liderar();
