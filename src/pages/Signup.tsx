import { useRef } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import { IoMdPersonAdd } from 'react-icons/io';

import { useForm } from '../hooks/useFormHook';

import { useNavigate } from 'react-router-dom';
import { postAuthSignup } from '../api/auth';
import { type SignupRes } from '../types/authType';
import { type ErrorMessage } from '../types/errorType';
import Title from '../components/Title';

export default function Signup() {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement>> = {
    nickname: nameRef,
    email: emailRef,
    password: passwordRef,
    confirm: confirmRef,
  };

  const { handleSubmit, form, handleInputChange, error, errorMessage } =
    useForm({
      initialValues: {
        nickname: '',
        email: '',
        password: '',
        confirm: '',
      },
      refs,
      onSubmit: async (): Promise<SignupRes> => {
        const { confirm, ...formData } = form;
        const result = await postAuthSignup(formData);
        return result;
      },
      onErrors: (e) => {
        const { message } = e.response?.data as ErrorMessage;
        alert(message);
      },
      onSuccess: (e) => {
        alert(`${e.message}`);
        navigate('/login');
      },
    });

  return (
    <>
      <Title title="Sign Up" />
      <div className="py-12 mx-auto w-full sm:w-96">
        <form onSubmit={handleSubmit}>
          <Input
            name="nickname"
            value={form.nickname}
            placeholder="Enter nickname"
            onChange={handleInputChange}
            refs={refs}
            error={error}
          >
            Nickname
          </Input>
          <Input
            labelClass="mt-5"
            name="email"
            value={form.email}
            placeholder="Enter Email"
            onChange={handleInputChange}
            refs={refs}
            error={error}
          >
            Email
          </Input>
          <Input
            labelClass="mt-5"
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={handleInputChange}
            refs={refs}
            error={error}
          >
            Password
            <br />
            <span className="text-sm">
              (10자 이상의 영문 대소문자, 숫자, 특수문자 조합을 사용해주세요.)
            </span>
          </Input>
          <Input
            labelClass="mt-5"
            type="password"
            name="confirm"
            value={form.confirm}
            placeholder="Enter Confirm Password"
            onChange={handleInputChange}
            refs={refs}
            error={error}
          >
            Confirm Password
          </Input>
          {errorMessage !== '' && (
            <p className="mt-5 text-red-500">{`Please check your ${errorMessage}`}</p>
          )}
          <div className="flex flex-col items-center">
            <Button
              addClass="mt-10 py-2 px-5 flex items-center gap-2 text-white bg-purple-500 hover:bg-purple-600 rounded-md"
              type="submit"
            >
              Sign Up <IoMdPersonAdd />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
