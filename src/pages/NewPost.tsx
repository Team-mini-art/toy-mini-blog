// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

export default function NewPost() {
  const titleRef = useRef<Editor>(null);
  const contentRef = useRef<Editor>(null);
  // const postRef: Record<string, React.RefObject<HTMLInputElement>> = {
  const postRef = {
    title: titleRef,
    content: contentRef,
  };

  const handleInputChange = () => {
    const contentEditor = postRef.content.current?.getInstance();
    contentEditor.focus();
    console.log(contentEditor.getHTML());
  };

  return (
    <div>
      <Editor
        height="40rem"
        placeholder="Please Enter Text."
        previewStyle="vertical"
        previewHighlight={false}
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
