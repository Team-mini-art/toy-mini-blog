import { Link } from 'react-router-dom';
import List from '../components/List';
import Title from '../components/Title';

import { getPosts } from '../api/post';
import { useQuery } from 'react-query';

export default function Home() {
  const { data } = useQuery('posts', getPosts);
  const LatestPosts = data?.posts ? data?.posts?.slice(-3) : [];

  return (
    <main>
      {/* <Title title="Latest" description="latest posts from all users." /> */}
      <Title title="Latest" />
      <List posts={LatestPosts} />
      <div className="mt-5 flex justify-end">
        <Link
          to="/post"
          className="hover:text-purple-600"
          aria-label="All posts"
        >
          All Posts →
        </Link>
      </div>
    </main>
  );
}
