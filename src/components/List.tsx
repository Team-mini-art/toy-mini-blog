import ListItem from './ListItem';
import { type Post } from '../types/postType';

export default function List({ posts }: { posts: Post[] }) {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="divide-y divide-gray-200">
      {posts.reverse().map(({ id, title, contents, createdDate }: Post) => {
        // if (id > 3) return null;
        return (
          <ListItem
            key={id}
            id={id}
            title={title}
            contents={contents}
            createdDate={createdDate}
          />
        );
      })}
    </ul>
  );
}
