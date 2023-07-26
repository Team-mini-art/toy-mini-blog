import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useForm() {
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
}
