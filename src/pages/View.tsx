// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import Title from '../components/Title';

import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteView, getView } from '../api/post';
import formatDate from '../util/formatDate';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';

export default function View() {
  const location = useLocation();
  const pathName = location.pathname.split('/')[2];
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth.value);

  const { isLoading, data } = useQuery(
    'view',
    async () => await getView(pathName),
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const handleDelete = async () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    const { message } = await deleteView(pathName);
    alert(message);
    navigate('/post');
  };

  const formattedDate = formatDate(data.createdDate);
  return (
    <>
      <Title subtitle={data.title} description={formattedDate} />
      <Viewer initialValue={data.contents} />
      <div className="mt-20 flex justify-end">
        <button
          onClick={handleDelete}
          className="text-gray-400 hover:text-purple-600"
        >
          Delete Post
        </button>
      </div>
    </>
  );
}
