// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import Title from '../components/Title';
import Button from '../components/Button';

import { useQuery } from 'react-query';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteView, getView } from '../api/post';

import formatDate from '../util/formatDate';
import { type RootState } from '../store/store';

export default function View() {
  const location = useLocation();
  const pathName = location.pathname.split('/')[2];
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth.value);

  const { isLoading, data } = useQuery(
    `view${pathName}`,
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
      <div className="flex justify-between items-end pb-8 pt-6 border-gray-200 border-b">
        <Title subtitle={data.title} description={formattedDate} posttitle />
        <div className="flex gap-5">
          <Link to={`/modify/${pathName}`} className="button-hover">
            Modify
          </Link>
          <button onClick={handleDelete} className="button-hover">
            Delete
          </button>
        </div>
      </div>
      <Viewer initialValue={data.contents} />
      <div
        className="mt-40 p-6 text-center button-hover border-t border-gray-200"
        id="comment"
      >
        <button>Load Comments</button>
      </div>
      <div className="mt-40">
        <strong className="font-bold">4 comments</strong>
        <div className="mt-4">
          <textarea
            className="input-basic"
            placeholder="Leave a comment"
          ></textarea>
          <div className="mt-4 flex justify-end">
            <Button>Comment</Button>
          </div>

          <div className="p-6 border-t border-gray-200">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <strong className="font-bold text-gray-400">yezi</strong>
                <time className="text-sm text-gray-400">September 4, 2023</time>
              </div>
              <div className="flex gap-2">
                <button className="button-hover text-sm">Edit</button>
                <button className="button-hover text-sm">Delete</button>
              </div>
            </div>
            <p className="mt-4">
              이렇게 유용한 정보를 공유해주셔서 감사합니다.
            </p>
          </div>
        </div>
        {/* email
        <br />
        nickname
        <br />
        contents
        <br /> */}
      </div>
    </>
  );
}
