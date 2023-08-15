// TODO: API 필요 없는 거 빼기
export interface GetPostRes {
  id: number;
  email: string;
  title: string;
  contents: string;
  createdDate: string;
  updatedDate: string;
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
