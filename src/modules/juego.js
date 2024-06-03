import { Orco, Goblin, Kobold } from "./criatura.js";

export class Juego{
    constructor() {
        this.historial = [];
        this.monstruo = null;
    }

    loguear(mensaje) {
        this.historial.push(mensaje);
        console.log(mensaje);
        alert(mensaje);
    }

    investigar() {
        if (this.monstruo && this.monstruo.vida > 0) {
            this.loguear("No puedes investigar mientras haya un monstruo vivo.");
            return;
        }

        const monstruos = [new Orco(), new Goblin(), new Kobold()];
        this.monstruo = monstruos[Math.floor(Math.random() * monstruos.length)];
        this.loguear(`¡Un ${this.monstruo.nombre} ha aparecido!`);
    }

    atacar(heroe) {
        if (!this.monstruo || this.monstruo.vida <= 0) {
            this.loguear("No hay ningún monstruo para atacar.");
            return;
        }
        
        const danio = Math.max(0, heroe.ataque);
        this.monstruo.vida -= danio;
        this.loguear(`${heroe.nombre} ataca a ${this.monstruo.nombre}! Le hace ${danio} de daño.`);
        
        if (this.monstruo.vida <= 0) {
            this.loguear(`¡Has derrotado al ${this.monstruo.nombre}!`);
            this.monstruo.vida = 0;
        } else {
            const contraataque = Math.max(0, this.monstruo.ataque);
            heroe.vida -= contraataque;
            this.loguear(`${this.monstruo.nombre} contraataca! Te hace ${contraataque} de daño.`);
        }

        this.loguear(`Tu vida: ${heroe.vida}, Vida del ${this.monstruo.nombre}: ${this.monstruo.vida}`);
    }
}   

