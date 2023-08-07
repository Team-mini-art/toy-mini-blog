import { useRef } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import { AiFillLock } from 'react-icons/Ai';

import { useForm } from '../hooks/useFormHook';

import { useNavigate } from 'react-router-dom';
import { postAuthLogin } from '../api/auth';
import { login } from '../store/features/authSlice';
import { useDispatch } from 'react-redux';

import { type LoginRes } from '../types/authType';
import { type ErrorMessage } from '../types/errorType';

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
        alert(`${e.message}되었습니다.`);
        dispatch(login({ nickname, email, accessToken, refreshToken }));
        // TODO navigate
        navigate('/');
      },
    });

  return (
    <>
      <div className="divide-y divide-gray-200">
        <div className="pb-8 pt-6">
          <h2 className="flex text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Log In
          </h2>
        </div>
        <div className="py-12">
          {/* <div>
            <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Subscribe to the newsletter
            </div>
            <form className="flex flex-col sm:flex-row">
              <div>
                <label htmlFor="email-input">
                  <span className="sr-only">Email address</span>
                  <input
                    autoComplete="email"
                    className="focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black"
                    id="email-input"
                    placeholder="Enter your email"
                    required=""
                    type="email"
                    name="email"
                  />
                </label>
              </div>
              <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                <button
                  className="bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div> */}

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-start gap-5">
              <Input
                labelClass=""
                inputClass="py-2 px-4 block w-60 border border-gray-300 rounded-md"
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
                labelClass=""
                inputClass="py-2 px-4 block w-60 border border-gray-300 rounded-md"
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
              <Button
                addClass="py-2 px-5 flex items-center gap-2 bg-purple-500 text-white rounded-md"
                type="submit"
              >
                Log In <AiFillLock />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
