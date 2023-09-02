// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';

import { postView } from '../api/post';

import { useEffect, useRef } from 'react';
import { usePostFromHook } from '../hooks/usePostFromHook';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { type RootState } from '../store/store';
import { type PostPutRes } from '../types/postType';
import { type ErrorMessage } from '../types/errorType';

export default function PostForm() {
  const navigate = useNavigate();

  const { email } = useSelector((state: RootState) => state.auth.value);

  const titleRef = useRef<HTMLInputElement>(null);
  const contenstRef = useRef<Editor>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement | Editor>> = {
    title: titleRef,
    contents: contenstRef,
  };

  const { form, handleInputChange, handleSubmit, error } = usePostFromHook({
    initialValues: {
      title: '',
      contents: '',
    },
    refs,
    onSubmit: async (): Promise<PostPutRes> => {
      const result = await postView({ email, ...form });
      return result;
    },
    onErrors: (e) => {
      const { message } = e.response?.data as ErrorMessage;
      alert(message);
    },
    onSuccess: (e: PostPutRes) => {
      const { message } = e;
      alert(`${message}`);
      navigate('/post');
    },
  });

  useEffect(() => {
    (refs.title.current as HTMLInputElement)?.focus();
  }, []);

  return (
    <>
      <Title title="New Post" />
      <form action="">
        <div className="py-12">
          <Input
            inputClass="border-gray-300"
            name="title"
            value={form.title}
            placeholder="Enter Title"
            onChange={handleInputChange}
            refs={refs}
            error={error}
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
            autofocus={false}
            useCommandShortcut={true}
            usageStatistics={false}
            ref={contenstRef}
            onChange={() => {
              handleInputChange(contenstRef);
            }}
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
// import { useRef, useState } from 'react';

// import { useQuery } from 'react-query';

// export default function PostForm() {
//   const location = useLocation();
//   const isNew = location.pathname.includes('new');
//   const pathName = location.pathname.split('/')[2];
//   const [title, setTitle] = useState('');

//   // API
//   const titleRef = useRef<HTMLInputElement>(null);
//   const contenstRef = useRef<Editor>(null);
//   const contentEditor = contenstRef.current?.getInstance();

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
//             ref={contenstRef}
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
