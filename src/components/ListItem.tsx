import { Link } from 'react-router-dom';
import formatDate from '../util/formatDate';

interface Props {
  id: number;
  title: string;
  contents: string;
  createdDate: string;
}

export default function ListItem({ id, title, contents, createdDate }: Props) {
  const formattedDate = formatDate(createdDate);

  return (
    <>
      <li className="py-12">
        <article>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <time dateTime={createdDate}>{formattedDate}</time>
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link to={`/post/${id}`}>{title}</Link>
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-400">{contents}</div>
              </div>
              <div className="text-base font-medium leading-6">
                <Link
                  to={`/post/${id}`}
                  className="text-purple-500 hover:text-purple-600"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </li>
    </>
  );
}
