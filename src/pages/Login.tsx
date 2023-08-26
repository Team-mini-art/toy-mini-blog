import { useRef } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import { AiFillLock } from 'react-icons/ai';

import { useForm } from '../hooks/useFormHook';

import { Link, useNavigate } from 'react-router-dom';
import { postAuthLogin } from '../api/auth';
import { login } from '../store/features/authSlice';
import { useDispatch } from 'react-redux';

import { type LoginRes } from '../types/authType';
import { type ErrorMessage } from '../types/errorType';
import Title from '../components/Title';

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement>> = {
    email: emailRef,
    password: passwordRef,
  };

  const { handleSubmit, form, handleInputChange, error, errorMessage } =
    useForm({
      initialValues: {
        email: '',
        password: '',
      },
      refs,
      onSubmit: async (): Promise<LoginRes> => {
        const result = await postAuthLogin(form);
        return result;
      },
      onErrors: (e) => {
        const { message } = e.response?.data as ErrorMessage;
        alert(message);
      },
      onSuccess: (e) => {
        const {
          nickname,
          email,
          tokenInfo: { accessToken, refreshToken },
        } = e as LoginRes;
        alert(`${e.message}`);
        dispatch(login({ nickname, email, accessToken, refreshToken }));
        // TODO navigate
        navigate('/');
      },
    });

  return (
    <>
      <Title title="Log In" />
      <div className="py-12 mx-auto w-full sm:w-96">
        <form onSubmit={handleSubmit}>
          <Input
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
          </Input>
          {errorMessage !== '' && (
            <p className="mt-5 text-red-500">{`Please check your ${errorMessage}`}</p>
          )}
          <div className="mt-10 flex flex-col items-center">
            <Button type="submit">
              Log In <AiFillLock />
            </Button>
            <Link
              to="/signup"
              className="mt-2 text-gray-400 hover:text-purple-600"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
