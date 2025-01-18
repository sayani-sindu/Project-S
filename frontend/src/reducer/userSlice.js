import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    fetchAllUsers: (state, action) => action.payload,
    updateUser: (state, action) => state.map((user) =>
      user._id === action.payload._id ? action.payload : user
    ),
    createUser: (state, action) => [...state, action.payload],
    deleteUser: (state, action) => state.filter(user => user._id !== action.payload),
  },
});

export const { fetchAllUsers, updateUser, createUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
