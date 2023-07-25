interface Props {
  labelClass: string;
  inputClass?: string;
  name: string;
  value: string;
  placeholder: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refs: React.RefObject<HTMLInputElement>;
  error?: string;
}

export default function Input({
  labelClass,
  inputClass = '',
  name,
  value,
  placeholder,
  children,
  onChange,
  refs,
  error,
}: Props) {
  // console.log(error);
  return (
    <label className={labelClass}>
      {children}
      <input
        className={`common-input ${inputClass} ${
          error === name ? 'outline-1 outline-purple-500' : ''
        }`}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={refs}
      />
    </label>
  );
}
