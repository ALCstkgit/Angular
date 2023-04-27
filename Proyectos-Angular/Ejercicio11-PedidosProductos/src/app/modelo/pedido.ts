export class Pedido{
    private _idPedido: number
    private _idCliente: number
    private _formaPago: string;
    private _direccion: string;

    constructor(idP:number, idC:number, fPago:string,dir:string){
        this._idPedido = idP
        this._idCliente = idC
        this._formaPago = fPago
        this._direccion = dir
    }

    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }
    public get formaPago(): string {
        return this._formaPago;
    }
    public set formaPago(value: string) {
        this._formaPago = value;
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