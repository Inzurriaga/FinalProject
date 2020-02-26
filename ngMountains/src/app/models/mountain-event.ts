import { Mountain } from './mountain';

export class MountainEvent {
    //FIELD

    id:number;

	  description: string;

	  completed: boolean;

    eventDate: Date;

    mountain: Mountain;



    //Constructor
    constructor(id?:number,description?:string,completed:boolean =false,eventDate?:Date,mountain:Mountain = new Mountain()){
        this.id=id;
        this.description=description;
        this.completed=completed;
        this.eventDate=eventDate;
        this.mountain= mountain;
    }
}

