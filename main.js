"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var persona1 = new persona_1.Persona("Juan", "Ruiz Jodar", 23, "75864215b", "4 de Abril", "verde", "hombre", ["Cordoba", 8, 14526, "Almeria", "Almeria"], ["personal", "juanele@gmail.com"], ["movil", 658458974]);
var persona2 = new persona_1.Persona("Lulu", "Cabeza Dura", 33, "78953145j", "22 de junio", "morado", "mujer", ["Cadiz", 4, 23789, "Cadiz", "Cadiz"], ["personal", "lulu@gmail.com"], ["movil", 789430145]);
var persona3 = new persona_1.Persona("Noide", "Luna Menguante", 75, "98753014y", "18 de Diciembre", "amarillo", "hombre", ["Del mar", 9, 78034, "Malaga", "Malaga"], ["personal", "noide@hotmail.com"], ["movil", 642746512]);
var grupoPersonas = [persona1, persona2, persona3];
function busquedaDni(DNI, direccion, mail, telefono) {
    var found = grupoPersonas.filter(function (persona) { return persona.dni == DNI; });
    if (found.length) {
        found[0].modificarInformacion(direccion, mail, telefono);
        return console.log("Informacion añadida");
    }
    return console.log("DNI no encontrado");
}
busquedaDni("78953145j", ["Serrania", 8, 28016, "Madrid", "Madrid"], ["personal", "pelusi@gmail.com"], ["movil", 786123459]);
console.log(persona1, persona2, persona3);
