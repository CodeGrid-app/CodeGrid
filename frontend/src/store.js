import { configureStore } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import userLoginReducer from './slices/userSlice';

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },

  preloadedState: initialState,
});

export default store;
