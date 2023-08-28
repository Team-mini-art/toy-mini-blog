// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import Input from '../components/Input';
import Title from '../components/Title';
import Button from '../components/Button';

import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { createPosts, getView } from '../api/post';
import { type RootState } from '../store/store';
import { type PostRes } from '../types/postType';
import { useQuery } from 'react-query';

export default function PostUpdate() {
  // const [title, setTitle] = useState('');
  const { email } = useSelector((state: RootState) => state.auth.value);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split('/')[2];

  const { isLoading, data } = useQuery(
    'view',
    async () => await getView(pathName),
  );

  const [title, setTitle] = useState(data.title);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<Editor>(null);
  const contentEditor = contentRef.current?.getInstance();

  const handleInputChange = async () => {
    const result: PostRes = await createPosts({
      email,
      title,
      contents: contentEditor.getMarkdown(),
    });
    alert(`${result.message}`);
    navigate('/post');
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Title title="New Post" />
      <form action="">
        <div className="py-12">
          <Input
            labelClass=""
            inputClass="border-gray-300"
            name="email"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            refs={{ title: titleRef }}
            // error={error}
          >
            Title
          </Input>
          <label className="mt-5 pb-2 block text-gray-500">content</label>
          <Editor
            /* height="40rem" */
            height="20rem"
            placeholder="Please Enter Text."
            previewStyle="vertical"
            previewHighlight={false}
            initialEditType="markdown"
            hideModeSwitch={true}
            useCommandShortcut={true}
            usageStatistics={false}
            ref={contentRef}
            initialValue={data.contents}
            // theme="dark"
          />
          <div className="mt-10 flex justify-end">
            <Button onClick={handleInputChange}>Click</Button>
          </div>
        </div>
      </form>
    </>
  );
}
