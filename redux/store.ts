import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { authModalReducer } from './slices/authModal';
import { commentReducer } from './slices/comment';
import { modalReducer } from './slices/modal';

export function makeStore() {
  return configureStore({
    reducer: {
      comment: commentReducer,
      modal: modalReducer,
      authModal: authModalReducer,
    },
  });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore, { debug: true });
