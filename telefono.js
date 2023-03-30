"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.mostrarDatos = function () {
        console.log("Tipo de tel\u00E9fono:" + this.tipo + "N\u00FAmero de tel\u00E9fono:" + this.numero);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
