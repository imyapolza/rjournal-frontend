import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseUser } from '../../utils/api/types';
import { RootState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

export interface AuthModalState {
  formType?: 'main' | 'login' | 'register';
}

const initialState: AuthModalState = {
  formType: 'main',
};

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    setFormType: (state, action: PayloadAction<string>) => {
      state.formType = action.payload;
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

export const { setFormType } = authModalSlice.actions;

export const formType = (state: RootState) => state.authModal.formType;

export const authModalReducer = authModalSlice.reducer;
