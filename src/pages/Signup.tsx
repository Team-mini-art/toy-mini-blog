import Input from '../components/Input';
import Button from '../components/Button';
import { IoMdPersonAdd } from 'react-icons/Io';
import { useRef } from 'react';
import { useForm } from '../hooks/useFormProps';
// import { useNavigate } from 'react-router-dom';
import { postAuthSignup } from '../api/auth';
import { type SignupRes } from '../types/authType';

export default function Signup() {
  // const navigate = useNavigate();

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
        const result = await postAuthSignup(form);
        return result?.data;
      },
      onErrors: () => {
        console.log('error');
      },
      onSuccess: () => {
        alert('Sign up is complete.');
        // navigate('/login');
      },
    });

  return (
    <div className="container-basic shadow_type1 w-[37.5rem]">
      <h1 className="container-title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <Input
            labelClass="w-full text-xl text-basic"
            inputClass="mt-2 rounded-2xl"
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
            labelClass="mt-7 w-full text-xl text-basic"
            inputClass="mt-2 rounded-2xl"
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
            labelClass="mt-7 w-full text-xl text-basic"
            inputClass="mt-2 rounded-2xl"
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={handleInputChange}
            refs={refs}
            error={error}
          >
            Password {/* (8자 이상 작성해주세요.) */}
          </Input>
          <Input
            labelClass="mt-7 w-full text-xl text-basic"
            inputClass="mt-2 rounded-2xl"
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
            <p className="mt-5 text-xl text-red-500">{`Please check your ${errorMessage}`}</p>
          )}
          <Button
            addClass="mt-12 py-6 px-10 flex justify-evenly items-center text-3xl font-semibold text-purple-500"
            type="submit"
          >
            Sign Up <IoMdPersonAdd className="ml-3" />
          </Button>
        </div>
      </form>
    </div>
  );
}
