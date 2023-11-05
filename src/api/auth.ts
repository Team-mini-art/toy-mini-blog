import axiosCustom from './index';
import store from '../store/store';

export const postAuthSignup = async (
  signupForm: Record<string, string>,
  // file: File,
) => {
  try {
    const formData = new FormData();
    // formData.append('file', file);
    formData.append(
      'data',
      new Blob([JSON.stringify(signupForm)], { type: 'application/json' }),
    );
    const { data } = await axiosCustom.post('/api/signup', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
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
    const { data } = await axiosCustom.post('/api/refresh', {
      accessToken,
      refreshToken,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
