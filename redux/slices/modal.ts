import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseUser } from '../../utils/api/types';
import { RootState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
  activeModal?: boolean;
}

const initialState: UserState = {
  activeModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    selectActiveModal: (state, action: PayloadAction<boolean>) => {
      state.activeModal = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.activeModal,
      };
    },
  },
});

export const { selectActiveModal } = modalSlice.actions;

export const activeModal = (state: RootState) => state.modal.activeModal;

export const modalReducer = modalSlice.reducer;
