import { Chatroom } from './chatroom';
import { Mountain } from './mountain';
import { User } from './user';

export class MountainEvent {
    //FIELD

    id:number;

	  description: string;

	  completed: boolean;

    eventDate: Date;

    mountain: Mountain;

    users: User[];

    host: User;

    chatRoom: Chatroom;



    //Constructor
    constructor(id?:number,description:string = "",completed:boolean =false,eventDate?:Date,mountain:Mountain = new Mountain(), users: User[] = [], host: User = new User(), chatRoom: Chatroom = new Chatroom()){
        this.id=id;
        this.description=description;
        this.completed=completed;
        this.eventDate=eventDate;
        this.mountain= mountain;
        this.users = users;
        this.host = host;
        this.chatRoom = chatRoom;
    }
}

