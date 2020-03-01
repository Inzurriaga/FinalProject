import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export class Chatroom {

  //field
  id: number;
  message: Message;
  eventId: number;

  constructor(id?: number, message?: Message, eventId?: number) {

    this.message= message;
    this.id= id;
    this.eventId= eventId;
  }
}
