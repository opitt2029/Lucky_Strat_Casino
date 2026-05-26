import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
    clearProfile(state) {
      state.profile = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setProfile, clearProfile } = userSlice.actions;
export default userSlice.reducer;
