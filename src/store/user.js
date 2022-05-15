import { createSlice } from '@reduxjs/toolkit';

const userState = {
  user:null
};

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {

  }
});

export const loginAction = userSlice.actions;
export default userSlice.reducer;
