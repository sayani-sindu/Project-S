import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// Initial state
const initialState = {
  user: null,
  token: null,
  isLoggedIn: false, 
  loading: false,
  error: null
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/login', credentials);
      return response.data; // Assume the API returns user data and token
    } catch (error) {
      return rejectWithValue(error.response.data); // Error handling
    }
  }
);

// Create slice with reducers and actions
const loginSlice = createSlice({
  name: "auth",
  initialState: initialState,
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
