export class Telefono {
    constructor(
        private tipo: string,
        private numero: number,) 
        {}
        mostrarDatos():void {
            console.log (`Tipo de teléfono:` + this.tipo+ `Número de teléfono:` +this.numero);
        }
}