import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseUser } from '../../utils/api/types';
import { RootState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
  active?: boolean;
}

const initialState: UserState = {
  active: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActiveModal: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.active,
      };
    },
  },
});

export const { setActiveModal } = modalSlice.actions;

export const selectActiveModal = (state: RootState) => state.modal.active;

export const modalReducer = modalSlice.reducer;
