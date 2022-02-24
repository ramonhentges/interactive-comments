import createStore from 'zustand';
import { data } from '../data';
import { Comment, Reply } from '../entities';

export const useCommentsStore = createStore<CommentsStoreProps>(set => ({
  comments: data.comments,
  addScore: (id: number) => {
    set(state => ({
      comments: state.comments.map(comment => {
        if (comment.id === id) {
          comment.score++;
          return comment;
        } else {
          comment.replies = comment.replies.map(reply => {
            if (reply.id === id) {
              reply.score++;
            }
            return reply;
          });
        }
        return comment;
      }),
    }));
  },
  removeScore: (id: number) => {
    set(state => ({
      comments: state.comments.map(comment => {
        if (comment.id === id) {
          if (comment.score > 0) {
            comment.score--;
          }
          return comment;
        } else {
          comment.replies = comment.replies.map(reply => {
            if (reply.id === id) {
              if (reply.score > 0) {
                reply.score--;
              }
            }
            return reply;
          });
        }
        return comment;
      }),
    }));
  },
}));

type CommentsStoreProps = {
  comments: Comment[];
  addScore: (id: number) => void;
  removeScore: (id: number) => void;
};
