import createStore from 'zustand';
import { data } from '../data';
import { User } from '../entities';

export const useAuthStore = createStore<AuthenticationStoreProps>(set => ({
  user: data.currentUser,
}));

type AuthenticationStoreProps = {
  user: User;
};
