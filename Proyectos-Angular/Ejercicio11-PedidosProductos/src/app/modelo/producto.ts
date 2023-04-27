export class Producto{
    private _idProducto: number;
    private _idPedido: number;
    private _cantidad: number;

    constructor(idPr:number, idPe:number, cant:number){
        this._idProducto = idPr
        this._idPedido = idPe
        this._cantidad = cant
    }

    public get idPedido(): number {
        return this._idPedido;
    }
    public set idPedido(value: number) {
        this._idPedido = value;
    }
    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }
    public get idProducto(): number {
        return this._idProducto;
    }
    public set idProducto(value: number) {
        this._idProducto = value;
    }
}