import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/authSlice';
import userReducer from '../reducer/userSlice'
import socketReducer from '../reducer/socketSlice'
import playerResultReducer from '../reducer/playerResultSlice'
import leaderboardReducer from '../reducer/leaderBoardSlice'
import gameReducer from '../reducer/gameSlice'
import quizGameReducer from '../reducer/quizGame';
import quizReducer from '../reducer/quizSlice'

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action); // Pass action to the next middleware or reducer
  console.log("Updated state:", store.getState());
  return result;
};
const store = configureStore({
  reducer: {
    auth:authReducer,
    quiz:quizReducer,
    game: gameReducer,
    leaderboard: leaderboardReducer,
    playerResult: playerResultReducer,
    users: userReducer,
    socket: socketReducer,
    quizGame:quizGameReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
