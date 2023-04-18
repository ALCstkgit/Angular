import { Tipos } from "./tipos";

export class Producto{
    private _id: number;
    private _nombre: string;
    private _cantidadExistencias: number;
    private _precio: number;
    private _tipo: Tipos;

    constructor(id:number, nombre:string, cantidadExistencias:number, precio:number, tipo:Tipos){
        this._id = id
        this._nombre = nombre
        this._cantidadExistencias = cantidadExistencias
        this._precio = precio
        this._tipo = tipo
    }

    public get tipo(): Tipos {
        return this._tipo;
    }
    public set tipo(value: Tipos) {
        this._tipo = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get cantidadExistencias(): number {
        return this._cantidadExistencias;
    }
    public set cantidadExistencias(value: number) {
        this._cantidadExistencias = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
}