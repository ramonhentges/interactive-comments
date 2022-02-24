import createStore from 'zustand';
import { useAuthStore } from '.';
import { data } from '../data';
import { Comment, Reply } from '../entities';

let lastId = 4;

export const getId = () => {
  lastId++;
  return lastId;
};

export const useCommentsStore = createStore<CommentsStoreProps>(set => ({
  comments: data.comments,
  replying: [],
  startReply: (comment: Comment, replyingTo: string) => {
    const reply = new Reply();
    reply.user = useAuthStore.getState().user;
    reply.replyingTo = replyingTo;
    const replying: Replying = {
      comment,
      reply,
    };
    set(state => ({ replying: [...state.replying, replying] }));
  },
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
  addComment: (comment: Comment) => {
    set(state => ({ comments: [...state.comments, comment] }));
  },
}));

type CommentsStoreProps = {
  comments: Comment[];
  replying: Replying[];
  startReply: (comment: Comment, replyingTo: string) => void;
  addScore: (id: number) => void;
  removeScore: (id: number) => void;
  addComment: (comment: Comment) => void;
};

type Replying = {
  comment: Comment;
  reply: Reply;
};
