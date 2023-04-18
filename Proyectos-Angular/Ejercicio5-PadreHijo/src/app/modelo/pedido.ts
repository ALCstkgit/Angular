export class Pedido{
    private _idPedido: number;
    private _idCliente: number;
    private _nombreCliente: string;
    private _totalProd: number;
    private _importe: number;

    constructor(idPedido:number, idCliente:number, nombreCliente:string, totalProd:number, importe:number){
        this._idPedido=idPedido
        this._idCliente=idCliente
        this._nombreCliente=nombreCliente
        this._totalProd=totalProd
        this._importe=importe
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