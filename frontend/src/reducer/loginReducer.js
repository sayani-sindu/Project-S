import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialData = {
  isLoggedIn: false,
};

// Create slice with reducers and actions
const loginSlice = createSlice({
  name: "login",
  initialState: initialData,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Export actions
export const { login, logout } = loginSlice.actions;

// Export reducer
export default loginSlice.reducer;
