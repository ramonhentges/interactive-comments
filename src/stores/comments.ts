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
  edits: {},
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
      replying: { ...state.replying, [replyingToId]: { ...replying } },
    }));
  },
  sendReply: (repliyingToId: number, content: string) => {
    const replies = get().replying;
    const startedReply = { ...replies[repliyingToId] };

    startedReply.reply.content = content.replace(
      `@${startedReply.reply.replyingTo}`,
      '',
    );

    delete replies[repliyingToId];
    set(state => ({
      comments: state.comments.map(comment => {
        if (comment.id === startedReply.comment.id) {
          comment.replies.push(startedReply.reply);
        }
        return comment;
      }),
      replying: replies,
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
  startEdit: (comment: Comment | Reply) => {
    set(state => ({
      comments: state.comments.map(value => {
        setEditing(comment.id, value);
        value.replies.forEach(reply => {
          setEditing(comment.id, reply);
        });
        return value;
      }),
    }));
  },
  sendEdit: (comment: Comment | Reply, newContent: string) => {
    set(state => ({
      comments: state.comments.map(value => {
        finishEditing(comment.id, value, newContent);
        value.replies.forEach(reply => {
          finishEditing(comment.id, reply, newContent);
        });
        return value;
      }),
    }));
  },
}));

const setEditing = (id: number, comment: Comment | Reply) => {
  if (id === comment.id) {
    comment.editing = true;
  }
};

const finishEditing = (
  id: number,
  comment: Comment | Reply,
  newContent: string,
) => {
  if (id === comment.id) {
    comment.editing = false;
    comment.content = newContent;
  }
};

type CommentsStoreProps = {
  comments: Comment[];
  replying: Replies;
  startReply: (comment: Comment, replyingReply?: Reply) => void;
  sendReply: (repliyingToId: number, content: string) => void;
  addScore: (id: number) => void;
  removeScore: (id: number) => void;
  addComment: (comment: Comment) => void;
  startEdit: (comment: Comment | Reply) => void;
  sendEdit: (comment: Comment | Reply, newContent: string) => void;
};

type Replying = {
  comment: Comment;
  reply: Reply;
};

type Replies = Record<number, Replying>;
