export class Direccion {
constructor(
    private calle: string,
    private numero: number, 
    private codigoPostal: number,
    private poblacion: string, 
    private provincia: string,
    private piso?: number, 
    private letra?: string ) 
    {}
    mostrarDatos():void {
        console.log (`Dirección completa:` + this.calle+ this.numero+ this.piso+
        `Codigo postal:` +this.codigoPostal+ `Población: ` + this.poblacion+ `Provincia: ` +this.provincia);
    }
}

