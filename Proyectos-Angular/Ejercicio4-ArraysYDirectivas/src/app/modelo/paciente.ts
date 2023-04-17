export class Paciente{
    private _nombre: string
    private _apellido: string
    private _dni: string;
    private _telefono: string;

    constructor(nombre: string, apellido:string, dni:string, telefono:string){
        this._nombre=nombre
        this._apellido=apellido
        this._dni=dni
        this._telefono=telefono
    }
    
    public get telefono(): string {
        return this._telefono;
    }
    public set telefono(value: string) {
        this._telefono = value;
    }
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
}