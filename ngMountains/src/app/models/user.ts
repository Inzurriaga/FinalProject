import { UserInfo } from './user-info';


export class User {
  id: number;
  username: string;
  role: string;
  enable: boolean;
  userInfo: UserInfo;
  createDate: string;

  constructor(id?: number, username?: string, role: string = "standard", enable: boolean = true, createDate?: string, userInfo?: UserInfo) {
    this.id = id;
    this.username = username;
    this.role = role;
    this.userInfo = userInfo;
    this.createDate = createDate;
  }
}
