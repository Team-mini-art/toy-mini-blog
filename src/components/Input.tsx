interface Props {
  labelClass: string;
  inputClass?: string;
  name: string;
  value: string;
  placeholder: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

export default function TextField({
  labelClass,
  inputClass = '',
  name,
  value,
  placeholder,
  children,
  onChange,
  ref,
}: Props) {
  return (
    <label className={labelClass}>
      {children}
      <input
        className={`common-input ${inputClass}`}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
    </label>
  );
}
