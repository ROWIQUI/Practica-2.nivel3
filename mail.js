"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.mostrarDatos = function () {
        console.log("Tipo de mail:" + this.tipo + "Direcci\u00F3n:" + this.direccion);
    };
    return Mail;
}());
exports.Mail = Mail;
