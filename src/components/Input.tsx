interface Props {
  labelClass: string;
  inputClass?: string;
  type?: 'text' | 'password';
  name: string;
  value: string;
  placeholder: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refs: Record<string, React.RefObject<HTMLInputElement>>;
  error?: string;
}

export default function Input({
  labelClass,
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
    <label className={labelClass}>
      {children}
      <input
        className={`${inputClass} ${
          error === name ? 'outline-1 outline-yellow-400' : ''
        }`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={refs[name]}
      />
    </label>
  );
}
