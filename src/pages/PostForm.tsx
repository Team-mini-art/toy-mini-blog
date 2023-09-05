// Toast UI Editor
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';

import { getView, postView, putView } from '../api/post';

import { useEffect, useRef } from 'react';
import { usePostFromHook } from '../hooks/usePostFromHook';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import { type RootState } from '../store/store';
import { type GetPostRes, type PostPutRes } from '../types/postType';
import { type ErrorMessage } from '../types/errorType';

export default function PostForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split('/')[2];
  const isNew = location.pathname.includes('new');

  const titleRef = useRef<HTMLInputElement>(null);
  const contenstRef = useRef<Editor>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement | Editor>> = {
    title: titleRef,
    contents: contenstRef,
  };

  const { email } = useSelector((state: RootState) => state.auth.value);

  const { form, handleInputChange, handleSubmit, error, updateInitialValues } =
    usePostFromHook({
      initialValues: {
        title: '',
        contents: '',
      },
      refs,
      onSubmit: async (): Promise<PostPutRes> => {
        const result = await (isNew
          ? postView({ email, ...form })
          : putView(pathName, { email, ...form }));
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

  // Update
  let data: GetPostRes | undefined;
  if (!isNew) {
    const { data: postData } = useQuery(
      `form${pathName}`,
      async () => await getView(pathName),
    );
    data = postData;
  }

  useEffect(() => {
    if (data) {
      updateInitialValues({ title: data.title, contents: data.contents });
    }
  }, [data]);

  return (
    <>
      <Title title="New Post" />
      <form onSubmit={handleSubmit}>
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
            // theme="dark"
          />
          <div className="mt-10 flex justify-end">
            <Button type="submit">{isNew ? 'Create' : 'Update'}</Button>
          </div>
        </div>
      </form>
    </>
  );
}
