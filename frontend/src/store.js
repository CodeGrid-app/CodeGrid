import { configureStore } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import userLoginReducer from './slices/userSlice';

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
    userLogin: userLoginReducer,
  },

  preloadedState: initialState,
});

export default store;
