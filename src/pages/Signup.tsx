import Input from '../components/Input';
import Button from '../components/Button';
import { IoMdPersonAdd } from 'react-icons/Io';
import { useRef } from 'react';
import { useForm } from '../hooks/useFormProps';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement>> = {
    username: nameRef,
    email: emailRef,
    password: passwordRef,
    confirm: confirmRef,
  };

  const { handleSubmit, form, handleInputChange, error, errorMessage } =
    useForm({
      initialValues: {
        username: '',
        email: '',
        password: '',
        confirm: '',
      },
      refs,
      onSubmit: /* async */ () => {
        // const result = await axios.post(
        //   `${GITHUB_API}/repos/art11010/github-issue-react/issues`,
        //   inputValues,
        //   {
        //     headers: {
        //       Authorization: process.env.REACT_APP_GITHUB_TOKEN,
        //       'Content-Type': 'application/json',
        //     },
        //   },
        // );
        // return result;
      },
      onErrors: () => {
        console.log('error');
      },
      onSuccess: () => {
        alert('Sign up is complete.');
        navigate('/login');
      },
    });

  return (
    <div className="container-basic w-[37.5rem]">
      <h1 className="container-title text-center">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mt-20">
          <Input
            labelClass="w-full text-xl text-basic"
            inputClass="mt-2 rounded-2xl"
            name="username"
            value={form.username}
            placeholder="Enter Username"
            onChange={handleInputChange}
            refs={refs}
            error={error}
          >
            Username
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
            Password (8자 이상 작성해주세요.)
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
            addClass="mt-12 flex justify-evenly items-center text-purple-500"
            type="submit"
          >
            Sign Up <IoMdPersonAdd className="ml-3" />
          </Button>
        </div>
      </form>
    </div>
  );
}
