import { useState } from 'react';
import { type Editor } from '@toast-ui/react-editor';
import { type PostPutRes } from '../types/postType';

import axios, { type AxiosError } from 'axios';

interface usePostFromProps {
  initialValues: Record<string, string>;
  refs: Record<string, React.RefObject<HTMLInputElement | Editor>>;
  onSubmit: () => Promise<PostPutRes>;
  onErrors: (e: AxiosError) => void;
  onSuccess: (e: PostPutRes) => void;
}

export function usePostFromHook({
  initialValues,
  refs,
  onSubmit,
  onErrors,
  onSuccess,
}: usePostFromProps) {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.RefObject<Editor>,
  ) => {
    let name;
    let value;

    if ('target' in e) {
      ({ name, value } = e.target);
    } else {
      name = 'contents';
      value = e.current?.getInstance().getMarkdown();
    }

    setForm({ ...form, [name]: value });
    if (error !== '') setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.title === '') {
      alert(`Please enter title.`);
      (refs.title.current as HTMLInputElement)?.focus();
      setError('title');
    } else {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          onErrors(e);
        }
      }
    }
  };

  return {
    form,
    handleInputChange,
    handleSubmit,
    error,
  };
}
