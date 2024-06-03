export class mounstros{
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

export class Kobold extends mounstros{
    constructor(){
        super();
        this.setNombre = "Kobold";
        this.setVida = 100;
        this.setDefensa = 50;
        this.setAtaque = 10;
    }
}

export class Goblin extends mounstros{
    constructor(){
        super();
        this.setNombre = "Goblin";
        this.setVida = 80;
        this.setDefensa = 25;
        this.setAtaque = 15;
    }
}

export class Orco extends mounstros{
    constructor(){
        super();
        this.setNombre = "Orco";
        this.setVida = 200;
        this.setDefensa = 100;
        this.setAtaque = 20;
    }
}
