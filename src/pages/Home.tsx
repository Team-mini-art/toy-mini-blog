import { Link } from 'react-router-dom';
import List from '../components/List';

export default function Main() {
  return (
    <>
      <main>
        <div className="divide-y divide-gray-200">
          <div className="pb-8 pt-6">
            <h2 className="flex text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
              Latest
            </h2>
          </div>
          <List />
        </div>
      </main>
      <Link
        to="/blog"
        className="mt-5 flex justify-end hover:text-purple-600"
        aria-label="All posts"
      >
        All Posts →
      </Link>
    </>
  );
}
