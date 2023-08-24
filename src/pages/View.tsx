// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import Title from '../components/Title';

import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getView } from '../api/post';
import formatDate from '../util/formatDate';

export default function View() {
  const location = useLocation();
  const { isLoading, data } = useQuery(
    'view',
    async () => await getView(location.pathname.split('/')[2]),
  );

  console.log(data);
  if (isLoading) {
    return <span>Loading...</span>;
  }

  const formattedDate = formatDate(data.createdDate);
  return (
    <>
      <Title subtitle={data.title} description={formattedDate} />
      <div className="py-12">
        <Viewer initialValue={data.contents} />
      </div>
    </>
  );
}
