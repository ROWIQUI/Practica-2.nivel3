export class Mail {
 constructor(
    private tipo: string,
    private direccion: string,)
    {}
    mostrarDatos(): void {
        console.log (`Tipo de mail:`+this.tipo+ `Dirección:` +this.direccion );
    }
}