export class Pedido{
    private _idPedido: number;
    private _idCliente: number;
    private _nombreCliente: string;
    private _totalProd: number;
    private _importe: number;

    constructor(){
        this._idPedido=0
        this._idCliente=0
        this._nombreCliente=""
        this._totalProd=0
        this._importe=0
    }

    public get importe(): number {
        return this._importe;
    }
    public set importe(value: number) {
        this._importe = value;
    }
    public get totalProd(): number {
        return this._totalProd;
    }
    public set totalProd(value: number) {
        this._totalProd = value;
    }
    public get nombreCliente(): string {
        return this._nombreCliente;
    }
    public set nombreCliente(value: string) {
        this._nombreCliente = value;
    }
    public get idCliente(): number {
        return this._idCliente;
    }
    public set idCliente(value: number) {
        this._idCliente = value;
    }
    public get idPedido(): number {
        return this._idPedido;
    }
    public set idPedido(value: number) {
        this._idPedido = value;
    }
}