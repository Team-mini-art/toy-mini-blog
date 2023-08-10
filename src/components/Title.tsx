interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Title({ title, subtitle, description }: Props) {
  return (
    <div className="pb-8 pt-6 border-b border-gray-200 space-y-5">
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
