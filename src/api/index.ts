import axios from 'axios';
import store from '../store/store';
import { postAuthRefresh } from './auth';
import { login, logout } from '../store/features/authSlice';

const BASE_URL = 'http://54.180.91.118:8081';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.value.accessToken;

    if (config.url !== '/api/refresh') {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }
    // console.log('Authorization', config.headers.Authorization);

    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const dispatch = store.dispatch;

    const {
      response: {
        data: { status, message },
      },
    } = error;

    if (status === 401) {
      if (message === 'access_token_expired') {
        const { newAccessToken } = (await postAuthRefresh()) as {
          newAccessToken: string;
        };
        dispatch(login({ accessToken: newAccessToken }));

        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return await instance(originalRequest);
      } else if (message === 'refresh_token_expired') {
        dispatch(logout());
        alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
        window.location.href = '/login';
      }
    }
    return await Promise.reject(error);
  },
);

export default instance;
