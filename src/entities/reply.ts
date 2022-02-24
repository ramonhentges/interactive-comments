import { User } from '.';

export class Reply {
  constructor() {
    this.id = -1;
    this.content = '';
    this.createdAt = '';
    this.replyingTo = '';
    this.score = 0;
    this.user = new User();
  }

  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  score: number;
  user: User;
}
