import Input from '../components/Input';
import Button from '../components/Button';
import { LuLogIn } from 'react-icons/Lu';
import { useRef, useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    error.length !== 0 && setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validate(form);
    if (validation != null) {
      const key = validation[0];
      refs[key].current?.focus();
      setError(key);
    } else {
      console.log('ok');
    }
  };

  const validate = (value: Record<string, string>) => {
    const emptyEntry = Object.entries(value).find(([_, val]) => val === '');

    if (emptyEntry != null) {
      const [emptyKey] = emptyEntry;
      alert(`please enter ${emptyKey}`);
    }

    return emptyEntry;
  };

  return (
    <div className="container-wrap">
      <div className="container-basic">
        <h1 className="container-title text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mt-20 px-20">
            <Input
              labelClass="w-full text-xl text-basic"
              inputClass="mt-2 rounded-2xl"
              name="username"
              value={form.username}
              placeholder="Enter Username"
              onChange={handleInputChange}
              refs={nameRef}
              error={error}
            >
              Username
            </Input>
            <Input
              labelClass="block mt-7 w-full text-xl text-basic"
              inputClass="mt-2 rounded-2xl"
              name="email"
              value={form.email}
              placeholder="Enter Email"
              onChange={handleInputChange}
              refs={emailRef}
              error={error}
            >
              Email
            </Input>
            <Input
              labelClass="block mt-7 w-full text-xl text-basic"
              inputClass="mt-2 rounded-2xl"
              name="password"
              value={form.password}
              placeholder="Enter Password"
              onChange={handleInputChange}
              refs={passwordRef}
              error={error}
            >
              Password
            </Input>
            <Input
              labelClass="block mt-7 w-full text-xl text-basic"
              inputClass="mt-2 rounded-2xl"
              name="confirm"
              value={form.confirm}
              placeholder="Enter Confirm Password"
              onChange={handleInputChange}
              refs={confirmRef}
              error={error}
            >
              Confirm Password
            </Input>
            <Button
              addClass="mt-16 flex justify-evenly items-center text-purple-500"
              type="submit"
            >
              Sign Up <LuLogIn className="ml-3" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
