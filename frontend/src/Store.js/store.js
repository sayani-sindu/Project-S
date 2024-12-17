import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducer/loginreducer';
import quizCreationSlice from '../reducer/quizReducer';

const store = configureStore({
  reducer: {
    login: loginReducer,
    quiz: quizCreationSlice.reducer,
  },
});

export default store;
