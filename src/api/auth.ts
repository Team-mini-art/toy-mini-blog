import axiosCustom from './index';

export const getAuthLogin = async () => {
  try {
    // const result = await axios.get(
    //   `${GITHUB_API}/repos/art11010/github-issue-react/issues`,
    //   {
    //     headers: {
    //       Authorization: process.env.REACT_APP_GITHUB_TOKEN,
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // );
    const res = await axiosCustom.post('/login');
    console.log(res);
    // return result;
  } catch (error) {
    console.log(error);
  }
};
