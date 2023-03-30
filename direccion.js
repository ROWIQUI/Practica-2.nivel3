"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, codigoPostal, poblacion, provincia, piso, letra) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
        this.piso = piso;
        this.letra = letra;
    }
    Direccion.prototype.mostrarDatos = function () {
        console.log("Direcci\u00F3n completa:" + this.calle + this.numero + this.piso +
            "Codigo postal:" + this.codigoPostal + "Poblaci\u00F3n: " + this.poblacion + "Provincia: " + this.provincia);
    };
    return Direccion;
}());
exports.Direccion = Direccion;
