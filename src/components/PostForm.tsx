// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import Input from '../components/Input';
import Button from '../components/Button';

export default function PostNew({ title, setTitle, handleInputChange }) {
  return (
    <>
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
            // refs={{ title: titleRef }}
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
            // ref={contentRef}
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
