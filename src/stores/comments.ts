import createStore from 'zustand';
import { useAuthStore } from '.';
import { data } from '../data';
import { Comment, Reply } from '../entities';

let lastId = 4;

export const getId = () => {
  lastId++;
  return lastId;
};

export const useCommentsStore = createStore<CommentsStoreProps>((set, get) => ({
  comments: data.comments,
  replying: {},
  startReply: (comment: Comment, replyingReply?: Reply) => {
    const reply = new Reply();
    reply.user = useAuthStore.getState().user;
    replyingReply
      ? (reply.replyingTo = replyingReply.user.username)
      : (reply.replyingTo = comment.user.username);

    const replying: Replying = {
      comment,
      reply,
    };
    const replyingToId = replyingReply ? replyingReply.id : comment.id;
    set(state => ({
      replying: { ...state.replying, [replyingToId]: { replying } },
    }));
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
  replying: object;
  startReply: (comment: Comment, replyingReply?: Reply) => void;
  addScore: (id: number) => void;
  removeScore: (id: number) => void;
  addComment: (comment: Comment) => void;
};

type Replying = {
  comment: Comment;
  reply: Reply;
};
