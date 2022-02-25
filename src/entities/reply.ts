import { User } from '.';
import { getId } from '../stores';

export class Reply {
  constructor() {
    this.id = getId();
    this.content = '';
    this.createdAt = 'now';
    this.replyingTo = '';
    this.score = 0;
    this.user = new User();
    this.editing = false;
  }

  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  score: number;
  user: User;
  editing?: boolean;
}
