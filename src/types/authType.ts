// TODO: API 필요 없는 거 빼기
export interface SignupRes {
  status: 'string';
  message: 'string';
}

export interface LoginRes {
  status: string;
  message: string;
  email: string;
  nickname: string;
  tokenInfo: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
  };
}
