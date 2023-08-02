import axios from 'axios';
import store from '../store/store';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:8081';
// const BASE_URL = '';

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
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    // config.headers.Authorization = `Bearer ${token}`;
    console.log(config.headers.Authorization);
    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  },
);

// export const postAuthSignup = async (signupForm: Record<string, string>) => {
//   try {
//     const { data } = await axiosCustom.post('/api/signup', signupForm);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
      response: { status },
    } = error;
    if (status === 401) {
      const { data } = await instance.post('/api/토큰확인url', {
        // const token = store.getState().auth.value.accessToken;
        headers: {
          accessToken: store.getState().auth.value.accessToken,
          refreshToken: store.getState().auth.value.refreshToken,
        },
      });

      // dispatch(login({data.accessToken, data.refreshToken}));
    } else if (status === 419) {
      dispatch(logout());
      alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
      navigate('/login');
    }
    return await Promise.reject(error);
  },
);

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const statusCode = error.response?.status;
//     if (statusCode === 419 || statusCode === 401) {
//       try {
//         const refreshResponse = await axios.post(
//           "{refresh token 발급 API URL}",
//           { refresh: cookies.jwt }
//         );
//         console.log(refreshResponse);
//         const newToken = refreshResponse.data.accessToken;
//         setCookie("jwt", newToken);
//         axiosInstance = createAxiosInstance();
//         error.config.headers["Authorization"] = `Bearer ${newToken}`;
//         return axiosInstance(error.config);
//       } catch (refreshError) {
//         removeCookie("jwt");
//         navigate("/");
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(function (response) {
//   // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//   // 응답 데이터가 있는 작업 수행
//   return response;
// }, function (error) {
//   // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//   // 응답 오류가 있는 작업 수행
//   return Promise.reject(error);
// });

export default instance;
