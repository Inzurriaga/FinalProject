export class Event {

    //FIELD

    private id:number;
	
	private description: string;
	
	private completed: boolean;
	
    private eventDate: Date;

    //Constructor
    constructor(id:number,description:string,completed:boolean =false,eventDate:Date){
        this.id=id;
        this.description=description;
        this.completed=completed;
        this.eventDate=eventDate;

    }
}
