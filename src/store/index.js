import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './auth';
import userReducer from './user';

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer
  }
});

export default store;
