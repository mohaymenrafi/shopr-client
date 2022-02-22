import { publicRequest } from '../requestMethods';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from './userRedux';

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
    if (res.data) {
      navigate('/');
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user, navigate) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
    console.log(res.data);
    if (res.data) {
      navigate('/');
    }
  } catch (err) {
    dispatch(registerFailure());
  }
};
