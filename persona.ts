import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";
export class Persona {
    constructor(
        private nombre: string,
        private apellidos: string,
        private edad: number,
        public dni: string,
        private cumpleaños: string,
        private colorFavorito: string,
        private sexo: string,
        protected direcciones: any[],
        protected mails: any[],
        protected telefonos: any[],
        private notas?: string
        ) {
        this.direcciones = [new Direccion(direcciones[0], direcciones[1], direcciones[2],direcciones[3],
            direcciones[4], direcciones[5] || "", direcciones[6] || "")];
        this.telefonos = [new Telefono(telefonos[0], telefonos[1])];
        this.mails = [new Mail(mails[0], mails[1])];
    }
    mostrarDatos(): void {
        console.log('Nombre: ' + this.nombre + ' Apellidos ' + this.apellidos +
            ' Edad: ' + this.edad + ' DNI: ' + this.dni + ` Fecha de nacimiento: ` + this.cumpleaños + ` Color favorito: `
            + this.colorFavorito + ` Sexo: ` + this.sexo + ' Notas: ' + this.notas
        );
    }
    modificarInformacion( direccion: any [], telefono: any[], mail: any []): void {
        this.direcciones.push(new Direccion(direccion[0], direccion[1], direccion[2],direccion[3],
            direccion[4], direccion[5] || "", direccion[6] || ""));
        this.telefonos.push(new Telefono(telefono[0], telefono[1]));
        this.mails.push(new Mail(mail[0], mail[1]));
    }

}