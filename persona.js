"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
        this.direcciones = [new direccion_1.Direccion(direcciones[0], direcciones[1], direcciones[2], direcciones[3], direcciones[4], direcciones[5] || "", direcciones[6] || "")];
        this.telefonos = [new telefono_1.Telefono(telefonos[0], telefonos[1])];
        this.mails = [new mail_1.Mail(mails[0], mails[1])];
    }
    Persona.prototype.mostrarDatos = function () {
        console.log('Nombre: ' + this.nombre + ' Apellidos ' + this.apellidos +
            ' Edad: ' + this.edad + ' DNI: ' + this.dni + " Fecha de nacimiento: " + this.cumpleaños + " Color favorito: "
            + this.colorFavorito + " Sexo: " + this.sexo + ' Notas: ' + this.notas);
    };
    Persona.prototype.modificarInformacion = function (direccion, telefono, mail) {
        this.direcciones.push(new direccion_1.Direccion(direccion[0], direccion[1], direccion[2], direccion[3], direccion[4], direccion[5] || "", direccion[6] || ""));
        this.telefonos.push(new telefono_1.Telefono(telefono[0], telefono[1]));
        this.mails.push(new mail_1.Mail(mail[0], mail[1]));
    };
    return Persona;
}());
exports.Persona = Persona;
