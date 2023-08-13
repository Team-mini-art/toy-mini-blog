import { Link } from 'react-router-dom';
import List from '../components/List';
import Pagination from '../components/Pagination';

export default function Post() {
  return (
    <main>
      <div className="flex justify-end">
        <Link to="/new" className="button-rounded">
          New Post
        </Link>
      </div>
      <List />
      <Pagination />
    </main>
  );
}
