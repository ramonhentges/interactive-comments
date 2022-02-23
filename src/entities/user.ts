export class User {
  constructor() {
    this.username = '';
    this.image = { png: '', webp: '' };
  }
  username: string;
  image: { png: string; webp: string };
}
