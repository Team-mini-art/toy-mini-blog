import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  nickname: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: initialState,
  },
  reducers: {
    // login: (state, action) => {
    //   state.value = action.payload;
    // },
    login: (state, action) => {
      state.value = { ...state.value, ...action.payload };
      state.value.isLoggedIn = true;
    },
    logout: (state) => {
      console.log('logout');
      state.value = initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
