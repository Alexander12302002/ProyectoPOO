export class Criatura {
    constructor(nombre, vida, ataque, Def) {
      this.nombre = nombre;
      this.vida = vida;
      this.ataque = ataque;
      this.Def = Def
    }
  }

export class Monstruo extends Criatura {
    constructor(nombre, vida, ataque, Def) {
      super(nombre, vida, ataque, Def);
    }
  }
  
export class Orco extends Monstruo {
    constructor() {
      super("Orco", 200, 20, 50);
    }
  }
  
export class Goblin extends Monstruo {
    constructor() {
      super("Goblin", 150, 15, 25);
    }
  }
  
export class Kobold extends Monstruo {
    constructor() {
      super("Kobold", 100, 10, 10);
    }
  }