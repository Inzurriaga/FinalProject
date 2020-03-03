import { Chatroom } from './chatroom';
import { User } from './user';

export class Message {

  id: number;
  message: string;
  chatroom: Chatroom;
  user: User;

  constructor(id?: number, message?: string, user?: User, chatroom: Chatroom = new Chatroom()) {
    this.id = id;
    this.message = message;
    this.user = user;
    this.chatroom = chatroom;
  }

}
