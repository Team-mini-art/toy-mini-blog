import ListItem from './ListItem';
import { type GetPostRes } from '../types/postType';

export default function List({ posts }: { posts: GetPostRes[] }) {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="divide-y divide-gray-200">
      {posts
        .reverse()
        .map(({ id, title, contents, createdDate }: GetPostRes) => {
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
