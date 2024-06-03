import {mounstros,
        Kobold,
        Orco,
        Goblin
}from "./modules/criatura.js" 

import {Heroe,
        Mago,
        Guerrero
 } from "./modules/personaje.js";

console.log(new Kobold());
console.log(new Orco());
console.log(new Goblin());

let jugador1 = new Mago("Erune")
console.log(jugador1)

let jugador2 = new Guerrero("Artur")
console.log(jugador2)