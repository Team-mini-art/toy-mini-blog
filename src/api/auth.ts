import axiosCustom from './index';

export const postAuthSignup = async (signupForm: Record<string, string>) => {
  try {
    const res = await axiosCustom.post('/api/signup', signupForm);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postAuthLogin = async (loginForm: Record<string, string>) => {
  try {
    const res = await axiosCustom.post('/api/login', loginForm);
    console.log(res);
    // return result;
  } catch (error) {
    console.log(error);
  }
};
