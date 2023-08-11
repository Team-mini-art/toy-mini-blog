import { Link } from 'react-router-dom';
import List from '../components/List';
import Title from '../components/Title';

export default function Main() {
  return (
    <main>
      {/* <Title title="Latest" description="latest posts from all users." /> */}
      <Title title="Latest" />
      <List />
      <div className="mt-5 flex justify-end">
        <Link
          to="/blog"
          className="hover:text-purple-600"
          aria-label="All posts"
        >
          All Posts →
        </Link>
      </div>
    </main>
  );
}
