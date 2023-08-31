// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import { usePostFromHook } from '../hooks/usePostFromHook';
import { useRef } from 'react';

export default function PostForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<Editor>(null);
  // const contentEditor = contentRef.current?.getInstance();

  const refs: Record<string, React.RefObject<HTMLInputElement | Editor>> = {
    title: titleRef,
    content: contentRef,
  };

  const { form, handleInputChange, handleSubmit } = usePostFromHook({
    initialValues: {
      title: '',
      content: '',
    },
    refs,
    onSubmit: async () => {},
    onErrors: async () => {},
    onSuccess: async () => {},
  });

  return (
    <>
      <Title title="New Post" />
      <form action="">
        <div className="py-12">
          <Input
            inputClass="border-gray-300"
            name="email"
            value={form.title}
            placeholder="Enter Title"
            onChange={handleInputChange}
            refs={refs}
            // error={error}
          >
            Title
          </Input>
          <label className="mt-5 pb-2 block text-gray-500">content</label>
          <Editor
            height="20rem"
            placeholder="Please Enter Text."
            previewStyle="vertical"
            previewHighlight={false}
            initialEditType="markdown"
            hideModeSwitch={true}
            useCommandShortcut={true}
            usageStatistics={false}
            ref={contentRef}
            // initialValue={data?.contents}
            // theme="dark"
          />
          <div className="mt-10 flex justify-end">
            <Button onClick={handleSubmit}>
              {/* {isNew ? 'Create' : 'Update'} */}
              Create
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

//
//
//
//
//
//
//
//
//
//
//
// Toast UI Editor
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';
// // import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

// import Input from '../components/Input';
// import Title from '../components/Title';
// import Button from '../components/Button';

// import { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { postView, getView, putView } from '../api/post';
// import { type RootState } from '../store/store';
// import { type PostPutRes } from '../types/postType';
// import { useQuery } from 'react-query';

// export default function PostForm() {
//   const location = useLocation();
//   const isNew = location.pathname.includes('new');
//   const pathName = location.pathname.split('/')[2];
//   const [title, setTitle] = useState('');

//   // API
//   const navigate = useNavigate();

//   const titleRef = useRef<HTMLInputElement>(null);
//   const contentRef = useRef<Editor>(null);
//   const contentEditor = contentRef.current?.getInstance();

//   const { email } = useSelector((state: RootState) => state.auth.value);

//   const handleInputChange = async () => {
//     const formData = {
//       email,
//       title,
//       contents: contentEditor.getMarkdown(),
//     };
//     const result: PostPutRes = await (isNew
//       ? postView(formData)
//       : putView(pathName, formData));

//     alert(`${result.message}`);
//     navigate('/post');
//   };

//   // Update
//   let data;
//   if (!isNew) {
//     const { isLoading, data: postData } = useQuery(
//       'view',
//       async () => await getView(pathName),
//     );

//     if (isLoading) {
//       return <span>Loading...</span>;
//     }

//     if (!title) {
//       setTitle(postData.title);
//     }
//     data = postData;
//   }

//   return (
//     <>
//       <Title title="New Post" />
//       <form action="">
//         <div className="py-12">
//           <Input
//             labelClass=""
//             inputClass="border-gray-300"
//             name="email"
//             value={title}
//             placeholder="Enter Title"
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//             refs={{ title: titleRef }}
//             // error={error}
//           >
//             Title
//           </Input>
//           <label className="mt-5 pb-2 block text-gray-500">content</label>
//           <Editor
//             height="20rem"
//             placeholder="Please Enter Text."
//             previewStyle="vertical"
//             previewHighlight={false}
//             initialEditType="markdown"
//             hideModeSwitch={true}
//             useCommandShortcut={true}
//             usageStatistics={false}
//             ref={contentRef}
//             initialValue={data?.contents}
//             // theme="dark"
//           />
//           <div className="mt-10 flex justify-end">
//             <Button onClick={handleInputChange}>
//               {isNew ? 'Create' : 'Update'}
//             </Button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
