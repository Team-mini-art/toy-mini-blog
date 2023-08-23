import Input from '../components/Input';

// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import { useRef, useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';
import { postPosts } from '../api/post';
import { useNavigate } from 'react-router-dom';
import { type PostRes } from '../types/postType';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<Editor>(null);
  const contentEditor = contentRef.current?.getInstance();

  const { email } = useSelector((state: RootState) => state.auth.value);

  const handleInputChange = async () => {
    const result: PostRes = await postPosts({
      email,
      title,
      contents: contentEditor.getHTML(),
    });
    alert(`${result.message} 했습니다.`);
    navigate('/');
  };

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
            // theme="dark"
          />
          <div className="flex justify-end">
            <Button onClick={handleInputChange}>Click</Button>
          </div>
        </div>
      </form>
    </>
  );
}
