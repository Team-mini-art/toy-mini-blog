import axiosCustom from './index';
import store from '../store/store';

export const postAuthSignup = async (signupForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.post('/api/signup', signupForm);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postAuthLogin = async (loginForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.post('/api/login', loginForm);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postAuthRefresh = async () => {
  try {
    const { accessToken, refreshToken } = store.getState().auth.value;
    console.log(accessToken, refreshToken);
    const { data } = await axiosCustom.post('/api/refresh', {
      accessToken,
      refreshToken,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
