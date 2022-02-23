import createStore from 'zustand';
import { data } from '../data';
import { Comment } from '../entities';

export const useCommentsStore = createStore<CommentsStoreProps>(set => ({
  comments: data.comments,
}));

type CommentsStoreProps = {
  comments: Comment[];
};
