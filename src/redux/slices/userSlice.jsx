import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    gender: '',
    age: '',
    email: '',
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state) => {
      return { name: '', gender: '', age: '', email: '' };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
