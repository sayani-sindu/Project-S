import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: { leaderboards: [], leaderboard: null },
  reducers: {
    createLeaderboard: (state, action) => {
      state.leaderboards.push(action.payload);
      state.leaderboard = action.payload;
    },
    fetchLeaderboard: (state, action) => {
      state.leaderboard = action.payload.leaderboard;
    },
    addPlayerResult: (state, action) => {
      state.leaderboards = state.leaderboards.map((leaderboard) =>
        leaderboard._id === action.payload._id ? action.payload : leaderboard
      );
    },
    updateQuestionLeaderboard: (state, action) => {
      state.leaderboards = state.leaderboards.map((leaderboard) =>
        leaderboard._id === action.payload._id ? action.payload : leaderboard
      );
    },
    updateCurrentLeaderboard: (state, action) => {
      state.leaderboards = state.leaderboards.map((leaderboard) =>
        leaderboard._id === action.payload._id ? action.payload : leaderboard
      );
    },
  },
});

export const {
  createLeaderboard,
  fetchLeaderboard,
  addPlayerResult,
  updateQuestionLeaderboard,
  updateCurrentLeaderboard,
} = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
