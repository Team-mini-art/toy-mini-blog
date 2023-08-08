interface Props {
  id: string;
}

export default function IconGradient({ id }: Props) {
  return (
    <svg width="0" height="0">
      <linearGradient id={id} x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#fef08a" offset="0%" />
        <stop stopColor="#a855f7" offset="100%" />
      </linearGradient>
    </svg>
  );
}
