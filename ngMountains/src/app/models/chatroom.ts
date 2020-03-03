import { Message } from './message';


export class Chatroom {

  //field
  id: number;
  messages: Message[];
  eventId: number;

  constructor(id?: number, messages?: Message[], eventId?: number) {
    this.id= id;
    this.messages = messages;
    this.eventId= eventId;
  }
}
