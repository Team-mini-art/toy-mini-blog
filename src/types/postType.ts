export interface Post {
  id: number;
  email: string;
  title: string;
  contents: string;
  createdDate: string;
  updatedDate?: string;
}

export interface GetPostRes {
  posts: Post[];
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface PostPutRes {
  status: string;
  message: string;
}
