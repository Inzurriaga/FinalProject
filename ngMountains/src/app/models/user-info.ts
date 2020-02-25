export class UserInfo {
  id: number;
  email: string;
  description: string;
  imageUrl: string;

  constructor(id?: number, email?: string, description?: string, imageUrl?: string) {
    this.id = id;
    this.email = email;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
