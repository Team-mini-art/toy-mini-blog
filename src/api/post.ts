import axiosCustom from './index';

export const getPosts = async () => {
  try {
    // const { data } = await axiosCustom.get('/api/posts');
    const { data } = await axiosCustom.get(
      '/api/posts?sort=createdDate&direction=desc',
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const postView = async (createForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.post('/api/posts', createForm);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getView = async (id: string) => {
  try {
    const { data } = await axiosCustom.get(`/api/posts/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putView = async (id: string, putForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.put(`/api/posts/${id}`, putForm);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteView = async (id: string) => {
  try {
    const { data } = await axiosCustom.delete(`/api/posts/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
