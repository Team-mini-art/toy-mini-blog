import { Link } from 'react-router-dom';
import List from '../components/List';
import Pagination from '../components/Pagination';

import { getPosts } from '../api/post';
import { useQuery } from 'react-query';

export default function Post() {
  const { data } = useQuery('posts', getPosts);
  return (
    <main>
      <div className="flex justify-end">
        <Link to="/new" className="button-rounded">
          New Post
        </Link>
      </div>
      <List posts={data} />
      <Pagination />
    </main>
  );
}
