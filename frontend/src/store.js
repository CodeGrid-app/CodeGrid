import { configureStore } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import userLoginSlice from './slices/userSlice';

const cookieValue = Cookies.get('userInfo')
  ? JSON.parse(Cookies.get('userInfo'))
  : null;

const initialState = {
  userLogin: {
    userInfo: cookieValue || null,
  },
};

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
  },

  preloadedState: initialState,
});

export default store;
