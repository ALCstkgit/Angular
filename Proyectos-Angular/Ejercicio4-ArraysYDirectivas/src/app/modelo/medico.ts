export class Medico{
    private _nombre: string;
    private _apellido: string;
    private _cedula: number;
    private _img: string;

    constructor(){
        this._nombre=""
        this._apellido=""
        this._cedula=0
        this._img=""
    }
    public get img(): string {
        return this._img;
    }
    public set img(value: string) {
        this._img = value;
    }
    public get cedula(): number {
        return this._cedula;
    }
    public set cedula(value: number) {
        this._cedula = value;
    }
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
}