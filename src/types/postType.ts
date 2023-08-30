export interface GetPostRes {
  id: number;
  email: string;
  title: string;
  contents: string;
  createdDate: string;
  updatedDate: string;
}

export interface PostPutRes {
  status: string;
  message: string;
}
