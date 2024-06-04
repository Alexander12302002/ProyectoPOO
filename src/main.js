import { Juego } from "./modules/juego.js";
import { Mago, Guerrero } from "./modules/personaje.js";

const juego = new Juego();
let heroe = null;

const tipoHeroe = prompt("Elige tu héroe: 'Mago' o 'Guerrero'");
const nombreHeroe = prompt("Introduce el nombre de tu héroe");

if (tipoHeroe.toLowerCase() === 'mago') {
        heroe = new Mago(nombreHeroe);
    } else if (tipoHeroe.toLowerCase() === 'guerrero') {
        heroe = new Guerrero(nombreHeroe);
    } else {
        alert("Tipo de héroe no válido. Se seleccionará Guerrero por defecto.");
        heroe = new Guerrero(nombreHeroe);
    }

function juegoPrincipal() {
    while (true) {
        if (juego.monstruo && juego.monstruo.vida > 0) {
            const accion = prompt("¿Qué quieres hacer? 'Atacar', 'Usar poción' (o 'Salir' para terminar el juego)");
        if (accion.toLowerCase() === 'salir') {
            alert("Gracias por jugar!");
            break;
        } else if (accion.toLowerCase() === 'usar pocion') {
            juego.usarPocion(heroe);
        } else if (accion.toLowerCase() === 'atacar') {
            juego.atacar(heroe);
            if (heroe.vida <= 0) {
                alert(`${heroe.nombre} ha sido derrotado. Fin del juego.`);
                break;}
            } else {
                alert("Acción no válida. Inténtalo de nuevo.");}
            } else {
                const accion = prompt("¿Qué quieres hacer? 'Investigar', 'Usar poción' (o 'Salir' para terminar el juego)");
                if (accion.toLowerCase() === 'salir') {
                    alert("Gracias por jugar!");
                    break;
                } else if (accion.toLowerCase() === 'investigar') {
                    juego.investigar();
                } else if (accion.toLowerCase() === 'usar pocion') {
                    juego.usarPocion(heroe);
                } else {
                    alert("Acción no válida. Inténtalo de nuevo.");
                }
            }
        }
    }

juegoPrincipal();