import axiosCustom from './index';

export const getComments = async () => {
  try {
    const { data } = await axiosCustom.get('/api/comments');
    return data;
  } catch (error) {
    throw error;
  }
};

export const postView = async (createForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.post('/api/comments', createForm);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getView = async (id: string) => {
  try {
    const { data } = await axiosCustom.get(`/api/comments/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putView = async (id: string, putForm: Record<string, string>) => {
  try {
    const { data } = await axiosCustom.put(`/api/comments/${id}`, putForm);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteView = async (id: string) => {
  try {
    const { data } = await axiosCustom.delete(`/api/comments/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
