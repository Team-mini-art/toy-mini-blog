interface Props {
  title: string;
  description?: string;
}

export default function Title({ title, description }: Props) {
  return (
    <div className="pb-8 pt-6 border-b border-gray-200 space-y-5">
      <h2 className="text-3xl font-extrabold sm:text-4xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
