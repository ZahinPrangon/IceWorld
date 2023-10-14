/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface ReviewSlice {
  currentReview: Review | null;
}

type Review = {
  rating: number;
  message: string;
  imageUrl?: string;
};

const initialState: ReviewSlice = {
  currentReview: null,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    updateCurrentReview: (state, action) => {
      state.currentReview = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentReview } = reviewSlice.actions;

export default reviewSlice.reducer;
