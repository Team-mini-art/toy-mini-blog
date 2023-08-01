import axiosCustom from './index';

export const postAuthSignup = async (signupForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.post('/api/signup', signupForm);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postAuthLogin = async (loginForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.post('/api/login', loginForm);
    return data;
  } catch (error) {
    console.log(error);
  }
};
