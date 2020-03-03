import { User } from './user';

export class Message {

  id: number;
  message: string;
  user: User;

  constructor(id?: number, message?: string, user?: User) {
    this.id = id;
    this.message = message;
    this.user = user;
  }

}
