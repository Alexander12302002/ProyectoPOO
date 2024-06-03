export class Heroe{
    #vida = 100
    #Def = 50
    #atq = 10
    constructor(){

    }
    set setNombre(nom){
        this.nombre = nom
    }
    set setVida(vida){
        this.#vida += vida
    }
    set setDefensa(def){
        this.#Def += def
    }
    set setAtaque(atq){
        this.#atq += atq
    }
}

export class Mago extends Heroe{
    constructor(nom){
        super();
        this.setNombre = nom;
        this.setVida = 250;
        this.setDefensa = 25;
        this.setAtaque = 40;
    }
}


export class Guerrero extends Heroe{
    constructor(nom){
        super();
        this.setNombre = nom;
        this.setVida = 400;
        this.setDefensa = 150;
        this.setAtaque = 50;
    }
}