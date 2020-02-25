export class User {
  id: number;
  username: string;
  password: string;
  role: string;
  enable: boolean;
  createDate: string;
  email: string;
  description: string;
  imageUrl: string;

  constructor(id?: number, username?: string, password?: string, role: string = "standard", enable: boolean = true, createDate?: string, email?: string, description?: string, imageUrl?: string) {
    this.id = id;
    this.username = username;
    this.role = role;
    this.createDate = createDate;
    this.email = email;
    this.description = description;
    this.imageUrl = imageUrl;
    this.enable = enable;
  }
}
