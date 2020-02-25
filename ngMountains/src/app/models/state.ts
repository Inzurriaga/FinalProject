export class State {

    //Field
    private id: number;

    private abbr: string;

    private name: string;

    //Constructor

    constructor(id:number, abbr:string,name:string){
        this.id=id;
        this.abbr=abbr;
        this.name=name;
    }
}
