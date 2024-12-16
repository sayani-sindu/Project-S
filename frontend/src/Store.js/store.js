import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducer/loginreducer';
import quizReducer from '../reducer/quizReducer';

const store = configureStore({
  reducer: {
    login: loginReducer,
    quiz: quizReducer,
  },
});

export default store;
