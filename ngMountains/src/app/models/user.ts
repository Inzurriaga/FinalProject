import { State } from './state';
export class User {
  id: number;
  username: string;
  password: string;
  role: string;
  enabled: boolean;
  createDate: string;
  email: string;
  description: string;
  imageUrl: string;
  state: State;

  constructor(id?: number, username?: string, password?: string, role: string = "standard", enabled: boolean = true, createDate?: string, email?: string, description?: string, imageUrl?: string, state: State = new State()) {
    this.id = id;
    this.username = username;
    this.role = role;
    this.createDate = createDate;
    this.email = email;
    this.description = description;
    this.imageUrl = imageUrl;
    this.enabled = enabled;
    this.state = state;
  }
}
