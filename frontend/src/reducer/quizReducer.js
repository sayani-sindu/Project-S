import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  quizName: "",
  quizQuestionsSet: [],
};

export const quizCreationSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizName: (state, action) => {
      state.quizName = action.payload;
    },
    addQuestionSet: (state, action) => {
        const { questionText = "", options = ["", "", "", ""], correctAnswer = "" } = action.payload;

      const question = {
        id: nanoid(),
        question: questionText,
        options: options,
        correctAnswer: correctAnswer,
      };
      state.quizQuestionsSet.push(question);
    },
    removeQuestion: (state, action) => {
      // Remove question by its id
      state.quizQuestionsSet = state.quizQuestionsSet.filter(
        (question) => question.id !== action.payload
      );
    },
  },
});

export const { setQuizName, questionSet, removeQuestion } = quizCreationSlice.actions;

export default quizCreationSlice.reducer;
