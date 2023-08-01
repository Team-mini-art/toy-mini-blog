import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    login: (state, action) => {
      state.value = action.payload;
      // const auth = JSON.parse(localStorage.getItem('persist:auth') || '{}');
      // console.log(JSON.parse(JSON.parse(auth).auth));
    },
    logout: (state) => {
      state.value = initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
