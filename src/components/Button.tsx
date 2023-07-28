interface Props {
  addClass?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
}

export default function Button({ addClass, type = 'button', children }: Props) {
  return (
    <button className={`common-button ${addClass}`} type={type}>
      {children}
    </button>
  );
}
