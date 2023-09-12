interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  posttitle?: boolean;
}

export default function Title({
  title,
  subtitle,
  description,
  posttitle,
}: Props) {
  return (
    <div
      className={`space-y-5  ${
        posttitle ? '' : 'pb-8 pt-6 border-gray-200 border-b'
      }`}
    >
      {title && (
        <h2 className="text-3xl font-extrabold sm:text-4xl md:text-6xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          {subtitle}
        </h3>
      )}
      {description && (
        <p className="text-lg leading-7 text-gray-500">{description}</p>
      )}
    </div>
  );
}
