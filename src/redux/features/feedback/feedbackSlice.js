// feedbackSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rating: null,
  hover: null,
  isReviewSubmitted: false, // New state for tracking review submission
  reviewText: '', // New state to store review text
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setHover: (state, action) => {
      state.hover = action.payload;
    },
    setReviewSubmitted: (state, action) => {
      state.isReviewSubmitted = action.payload;
    },
    setReviewText: (state, action) => {
      state.reviewText = action.payload;
    },
  },
});

export const { setRating, setHover, setReviewSubmitted, setReviewText } = feedbackSlice.actions;
export default feedbackSlice.reducer;

