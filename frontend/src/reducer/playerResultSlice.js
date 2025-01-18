import { createSlice } from '@reduxjs/toolkit';

const playerResultSlice = createSlice({
  name: 'playerResult',
  initialState: { playerResults: [], playerResult: null },
  reducers: {
    createPlayerResult: (state, action) => {
      state.playerResults.push(action.payload);
      state.playerResult = action.payload;
    },
    fetchPlayerResult: (state, action) => {
      state.playerResult = action.payload.playerResult;
    },
    addAnswer: (state, action) => {
      state.playerResults = state.playerResults.map((playerResult) =>
        playerResult._id === action.payload._id ? action.payload : playerResult
      );
    },
  },
});

export const { createPlayerResult, fetchPlayerResult, addAnswer } = playerResultSlice.actions;
export default playerResultSlice.reducer;
