import { createSlice } from '@reduxjs/toolkit';

const userLoginSlice = createSlice({
  name: 'user',
  initialState: { userInfo: null, loading: false, error: null },
  reducers: {
    userLoginRequest: state => {
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userLoginRequest, userLoginSuccess, userLoginFail } =
  userLoginSlice.actions;
export default userLoginSlice;
