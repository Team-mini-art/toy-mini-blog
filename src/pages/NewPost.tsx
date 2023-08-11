import Input from '../components/Input';

// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef, useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

export default function NewPost() {
  const [title, setTitle] = useState('');

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<Editor>(null);
  // const postRef: Record<string, React.RefObject<HTMLInputElement>> = {
  const refs = {
    title: titleRef,
  };

  const handleInputChange = () => {
    const contentEditor = contentRef.current?.getInstance();
    contentEditor.focus();
    console.log(contentEditor.getHTML());
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
            refs={refs}
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
