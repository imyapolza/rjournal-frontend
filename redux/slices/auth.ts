import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
  isAuth?: boolean;
}

const initialState: UserState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
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

export const { setIsAuth } = authSlice.actions;

export const isAuth = (state: RootState) => state.comment.isHidden;

export const authReducer = authSlice.reducer;
