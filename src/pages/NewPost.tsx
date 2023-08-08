// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

export default function NewPost() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  // const postRef: Record<string, React.RefObject<HTMLInputElement>> = {
  const postRef = {
    title: titleRef,
    content: contentRef,
  };

  const handleInputChange = () => {
    postRef.content.current?.focus();
  };

  return (
    <div>
      <Editor
        height="40rem"
        placeholder="Please Enter Text."
        previewStyle="vertical"
        initialEditType="markdown"
        hideModeSwitch={true}
        useCommandShortcut={true}
        usageStatistics={false}
        ref={postRef.content}
        // theme="dark"
      />
      <button onClick={handleInputChange}>Click</button>
    </div>
  );
}
