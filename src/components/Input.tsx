import { type Editor } from '@toast-ui/react-editor';

interface Props {
  labelClass?: string;
  inputClass?: string;
  type?: 'text' | 'password';
  name: string;
  value: string;
  placeholder: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refs: Record<string, React.RefObject<HTMLInputElement | Editor>>;
  error?: string;
}

export default function Input({
  labelClass = '',
  inputClass = '',
  type = 'text',
  name,
  value,
  placeholder,
  children,
  onChange,
  refs,
  error,
}: Props) {
  return (
    <>
      <label
        htmlFor={name}
        className={`block pb-2 text-gray-500 ${labelClass}`}
      >
        {children}
      </label>
      <input
        id={name}
        className={`input-basic ${inputClass} ${
          error === name ? 'input-error' : ''
        }`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={refs[name] as React.RefObject<HTMLInputElement>}
      />
    </>
  );
}
