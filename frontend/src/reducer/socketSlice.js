import { createSlice } from '@reduxjs/toolkit';

const socketSlice = createSlice({
  name: 'socket',
  initialState: { socket: null },
  reducers: {
    createSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const { createSocket } = socketSlice.actions;
export default socketSlice.reducer;
