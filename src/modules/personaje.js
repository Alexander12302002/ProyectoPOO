import { Criatura } from "./criatura.js";

class Heroe extends Criatura {
    constructor(nombre) {
      super(nombre, 0, 0, 0);
    }
  }

export class Mago extends Heroe{
    constructor(nombre){
        super();
        this.nombre = nombre;
        this.vida = 250;
        this.Def = 25;
        this.ataque = 40;
    }
}

export class Guerrero extends Heroe{
    constructor(nombre){
        super();
        this.nombre = nombre;
        this.vida = 400;
        this.Def = 150;
        this.ataque = 50;
    }
}