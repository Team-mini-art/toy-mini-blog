import { useState } from 'react';
import { type SignupRes, type LoginRes } from '../types/authType';
import axios, { type AxiosError } from 'axios';

interface useAuthFormProps {
  initialValues: Record<string, string>;
  refs: Record<string, React.RefObject<HTMLInputElement>>;
  onSubmit: () => Promise<SignupRes | LoginRes>;
  onErrors: (e: AxiosError) => void;
  onSuccess: (e: SignupRes | LoginRes) => void;
}

export function useAuthFormHook({
  initialValues,
  refs,
  onSubmit,
  onErrors,
  onSuccess,
}: useAuthFormProps) {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validate(form);

    if (validation !== undefined) {
      const key = validation[0];
      validation[1] === 'empty'
        ? alert(`Please enter ${key}`)
        : setErrorMessage(key);
      refs[key].current?.focus();
      setError(key);
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

  const validate = (value: Record<string, string>) => {
    const emptyEntry = Object.entries(value).find(([_, val]) => val === '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[!@#$%^&*()-=_+[\]{}/\\,.<>?'":;|]).*(?=.*[A-Z]).*(?=.*[0-9]).{10,}$/;

    // 빈 input check
    if (emptyEntry !== undefined) {
      const [emptyKey] = emptyEntry;
      return [emptyKey, 'empty'];
    }

    // 유효성 검사
    if (!emailRegex.test(value.email)) {
      return ['email'];
    } else if (!passwordRegex.test(value.password)) {
      return ['password'];
    } else if (
      value.password !== value.confirm &&
      value.confirm !== undefined
    ) {
      return ['confirm'];
    }

    return emptyEntry;
  };

  return { handleSubmit, form, handleInputChange, error, errorMessage };
}
