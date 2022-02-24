import { User, Reply } from '.';

export class Comment {
  constructor() {
    this.id = -1;
    this.content = '';
    this.createdAt = '';
    this.score = 0;
    this.user = new User();
    this.replies = [];
  }

  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}
