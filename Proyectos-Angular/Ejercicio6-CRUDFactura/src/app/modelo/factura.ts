export class Factura{
    private _idFactura: number;
    private _idCliente: number;
    private _totalFactura: number;
    private _iva: number;

    constructor(){
        this._idFactura = 0
        this._idCliente = 0
        this._totalFactura = 0
        this._iva = 0
    }

    public get iva(): number {
        return this._iva;
    }
    public set iva(value: number) {
        this._iva = value;
    }
    public get totalFactura(): number {
        return this._totalFactura;
    }
    public set totalFactura(value: number) {
        this._totalFactura = value;
    }
    public get idCliente(): number {
        return this._idCliente;
    }
    public set idCliente(value: number) {
        this._idCliente = value;
    }
    public get idFactura(): number {
        return this._idFactura;
    }
    public set idFactura(value: number) {
        this._idFactura = value;
    }

    public toString():string{
        return `IdFactura:${this.idFactura}
        IdCliente:${this.idCliente}
        TotalFactura:${this.totalFactura}
        Iva:${this.iva}`
    }
}