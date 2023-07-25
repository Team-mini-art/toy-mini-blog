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

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(validate(form));
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
              ref={nameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
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
              ref={confirmRef}
            >
              Confirm Password
            </Input>
            <Button
              addClass="mt-16 flex justify-evenly items-center text-point"
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
