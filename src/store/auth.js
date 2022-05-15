import { createSlice } from "@reduxjs/toolkit";

const loginState = {
  isLogin: JSON.parse(localStorage.getItem('user')) ? true : false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState: loginState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    loginFailure(state) {
      state.isLogin = false;
      state.user = null;
      state.error = true;
    },
    logout(state) {
      state.isLogin = false;
      state.user = null;
      localStorage.removeItem('user');
    },
    updateLogin(state, action) {
      state.isLogin = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
});

export const { login, loginFailure, logout, updateLogin } = loginSlice.actions;
export default loginSlice.reducer;