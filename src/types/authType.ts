// TODO: API 필요 없는 거 빼기
export interface SignupRes {
  id: number;
  email: string;
  password: string;
  nickname: string;
  roles: string[];
  createdDate: string;
  enabled: boolean;
  username: string | null;
  authorities: any | null; // TODO: any
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export interface LoginRes {
  status: string;
  message: string;
  id: number;
  email: string;
  nickname: string;
  tokenInfo: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
  };
}
