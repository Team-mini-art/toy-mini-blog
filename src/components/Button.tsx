interface Props {
  addClass?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  addClass = '',
  type = 'button',
  children,
  onClick,
}: Props) {
  return (
    <button
      className={`button-rounded ${addClass}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
