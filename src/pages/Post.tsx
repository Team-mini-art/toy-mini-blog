import { useNavigate } from 'react-router-dom';
import List from '../components/List';
import Pagination from '../components/Pagination';

import { getPosts } from '../api/post';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';

export default function Post() {
  const { data } = useQuery('posts', getPosts);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth.value);

  const handlePostNew = () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    navigate('/new');
  };
  return (
    <main>
      <div className="flex justify-end">
        <button className="mt-10 button-rounded" onClick={handlePostNew}>
          New Post
        </button>
      </div>
      <List posts={data} />
      <Pagination />
    </main>
  );
}
