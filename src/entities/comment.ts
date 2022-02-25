import { User, Reply } from '.';
import { getId } from '../stores';

export class Comment {
  constructor() {
    this.id = getId();
    this.content = '';
    this.createdAt = 'now';
    this.score = 0;
    this.user = new User();
    this.replies = [];
    this.editing = false;
  }

  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
  editing?: boolean;
}
