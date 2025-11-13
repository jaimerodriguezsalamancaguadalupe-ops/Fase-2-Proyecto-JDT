import { Consejero } from "./Personajes Especiales/Consejero.js";
import { Guerrero } from "./Personajes Especiales/Guerrero.js";
import { Rey } from "./Personajes Especiales/Rey.js";
import { Personaje } from "./Personaje.js";
import { Casa } from "./Casa.js";
import { Arma } from "./Arma.js";

const pers1= new Personaje ('Jon Snow');
const pers2= new Personaje ('Tyrion Lannister');
const pers3= new Personaje ('Robert Baratheon');


const casa1= new Casa ('Casa Stark');
const casa2= new Casa ('Casa Lannister');

const guerr1= new Guerrero ('Jon Snow', 'Garra', 25);

const consej1= new Consejero ('Tyrion Lannister');

const arma1= new Arma ('Garra', '', 25);

const rey1= new Rey ('Robert Baratheon', 15 );


pers1.mensajePresentacion(casa1)
guerr1.lucharGuerrero(arma1);

guerr1.entrenar();

pers2.mensajePresentacion(casa2);

consej1.lucharConsej();
consej1.aconsejar();

pers3.mensajePresentacion(casa1);

rey1.gobernar();
rey1.luchar();
