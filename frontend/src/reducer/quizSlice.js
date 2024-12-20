// redux/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  quizName: "",
  questions: [], // Array to store questions
};

// Create the slice
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizName: (state, action) => {
      state.quizName = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

// Export actions
export const { setQuizName, setQuestions } = quizSlice.actions;

// Export the reducer to be used in the store
export default quizSlice.reducer;
