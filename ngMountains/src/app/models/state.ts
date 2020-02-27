export class State {

    //Field
     id: number;

    abbr: string;

    name: string;

    //Constructor

    constructor(id:number = 1, abbr?:string,name?:string){
        this.id=id;
        this.abbr=abbr;
        this.name=name;
    }
}
