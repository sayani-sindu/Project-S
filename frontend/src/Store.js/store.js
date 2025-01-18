import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/authSlice';

import quizReducer from '../reducer/quizSlice';
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action); // Pass action to the next middleware or reducer
  console.log("Updated state:", store.getState());
  return result;
};
const store = configureStore({
  reducer: {
    auth:authReducer,
    quiz:quizReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
