import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';

// Configure Redux store with quiz reducer
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
