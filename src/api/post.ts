import axiosCustom from './index';

export const getPosts = async () => {
  try {
    const { data } = await axiosCustom.get('/api/posts');
    return data;
  } catch (error) {
    throw error;
  }
};

export const postPosts = async (postForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.post('/api/posts', postForm);
    return data;
  } catch (error) {
    throw error;
  }
};
