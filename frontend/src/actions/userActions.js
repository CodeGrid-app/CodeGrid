import axios from 'axios';
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
} from '../slices/userSlice';

export const login = (email, password) => async dispatch => {
  try {
    dispatch(userLoginRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:5000/api/users/login',
      { email, password },
      config
    );

    dispatch(userLoginSuccess(data));
  } catch (error) {
    dispatch(userLoginFail(error.message));
  }
};
