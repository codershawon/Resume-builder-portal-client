import { configureStore } from '@reduxjs/toolkit'
import feedbackSlice from './features/feedback/feedbackSlice'

export const store = configureStore({
  reducer: {
    feedback: feedbackSlice
  },
})
