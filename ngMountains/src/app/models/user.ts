import { Mountain } from './mountain';
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
  mountains: Mountain[];

  constructor(id?: number, username: string = "", password?: string, role: string = "standard", enabled: boolean = true, createDate?: string, email?: string, description: string = "", imageUrl?: string, state: State = new State(), mountains: Mountain[] = []) {
    this.id = id;
    this.password = password;
    this.username = username;
    this.role = role;
    this.createDate = createDate;
    this.email = email;
    this.description = description;
    this.imageUrl = imageUrl;
    this.enabled = enabled;
    this.state = state;
    this.mountains = mountains;
  }
}
