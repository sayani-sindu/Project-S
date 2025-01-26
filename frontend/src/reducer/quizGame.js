import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const quizfetchDB = createAsyncThunk('quiz/quizFromDb', async () => {
  const response = await axios('http://localhost:5000/api/quiz/');
  const data = await response.json();
  return data;
});
const quizGameSlice = createSlice({
  name: 'quiz',
  initialState: { isLoading: true, quizes: [] },
  reducers: {
   
    
    fetchPublicQuizes: (state, action) => {
      state.quizes = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
    },
    fetchAllQuizes: (state, action) => {
      state.quizes = action.payload;
    },
    fetchTeacherQuizes: (state, action) => {
      state.quizes = action.payload;
    },
    fetchQuizesBySearch: (state, action) => {
      state.quizes = action.payload;
    },
    createQuiz: (state, action) => {
      state.quizes.push(action.payload);
    },
    updateQuiz: (state, action) => {
      state.quizes = state.quizes.map((quiz) =>
        quiz._id === action.payload._id ? action.payload : quiz
      );
    },
    likeQuiz: (state, action) => {
      state.quizes = state.quizes.map((quiz) =>
        quiz._id === action.payload._id ? action.payload : quiz
      );
    },
    commentQuiz: (state, action) => {
      state.quizes = state.quizes.map((quiz) =>
        quiz._id === action.payload._id ? action.payload : quiz
      );
    },
    deleteQuiz: (state, action) => {
      state.quizes = state.quizes.filter((quiz) => quiz._id !== action.payload);
    },
    fetchQuiz: (state, action) => {
      state.quiz = action.payload.quiz;
    },
  },
});

export const {
  startLoading,
  endLoading,
  fetchPublicQuizes,
  fetchAllQuizes,
  fetchTeacherQuizes,
  fetchQuizesBySearch,
  createQuiz,
  updateQuiz,
  likeQuiz,
  commentQuiz,
  deleteQuiz,
  fetchQuiz,
} = quizGameSlice.actions;
export default quizGameSlice.reducer;
