import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface ChangePostState {
  title: string;
  body: string[];
}

const initialState: ChangePostState = {
  title: "",
  body: [],
};

export const changePostSlice = createSlice({
  name: "changePost",
  initialState,
  reducers: {
    setChangePost: (state, action: PayloadAction<ChangePostState>) => {
      state.title = action.payload.title;
      state.body = action.payload.body;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.title,
        ...action.payload.body,
      };
    },
  },
});

export const { setChangePost } = changePostSlice.actions;

export const changePost = (state: RootState) => state.changePost;

export const changePostReducer = changePostSlice.reducer;
