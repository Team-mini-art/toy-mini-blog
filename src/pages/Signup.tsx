import Input from '../components/Input';
import Button from '../components/Button';
import { LuLogIn } from 'react-icons/Lu';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      alert('Sign up is complete.');
      navigate('/login');
    }
  };

  const validate = (value: Record<string, string>) => {
    const emptyEntry = Object.entries(value).find(([_, val]) => val === '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minPasswordLength = 8;

    // 빈 input check
    if (emptyEntry !== undefined) {
      const [emptyKey] = emptyEntry;
      return [emptyKey, 'empty'];
    }

    // 유효성 검사
    if (!emailRegex.test(value.email)) {
      return ['email'];
    } else if (minPasswordLength > value.password.length) {
      return ['password'];
    } else if (value.password !== value.confirm) {
      return ['confirm'];
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
              refs={refs}
              error={error}
            >
              Username
            </Input>
            <Input
              labelClass="block mt-7 w-full text-xl text-basic"
              inputClass="mt-2 rounded-2xl"
              type="email"
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
              labelClass="block mt-7 w-full text-xl text-basic"
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
              labelClass="block mt-7 w-full text-xl text-basic"
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
              <p className="mt-3 text-xl text-red-500">{`Please check your ${errorMessage}`}</p>
            )}
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
