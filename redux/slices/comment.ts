import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseUser } from '../../utils/api/types';
import { RootState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
  isHidden?: boolean;
}

const initialState: UserState = {
  isHidden: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setIsHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.isHidden,
      };
    },
  },
});

export const { setIsHidden } = commentSlice.actions;

export const isHidden = (state: RootState) => state.comment.isHidden;

export const commentReducer = commentSlice.reducer;
