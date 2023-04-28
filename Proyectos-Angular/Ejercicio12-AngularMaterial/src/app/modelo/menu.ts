export class Menu{
    private _nombreMenu: string;
    private _nombreIcono: string;
    private _url: string;

    constructor(nM:string,nI:string,url:string){
        this._nombreMenu=nM
        this._nombreIcono=nI
        this._url=url
    }

    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    public get nombreIcono(): string {
        return this._nombreIcono;
    }
    public set nombreIcono(value: string) {
        this._nombreIcono = value;
    }
    public get nombreMenu(): string {
        return this._nombreMenu;
    }
    public set nombreMenu(value: string) {
        this._nombreMenu = value;
    }
}