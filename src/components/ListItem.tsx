interface Props {
  title: string;
  contents: string;
  createdDate: string;
}

export default function ListItem({ title, contents, createdDate }: Props) {
  // 게시글 id, 제목, 내용, 회원id 생성일 수정일

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
  }
  const formattedDate = formatDate(createdDate);

  return (
    <>
      <li className="py-12">
        <article>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <time dateTime={createdDate}>{formattedDate}</time>
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <button>{title}</button>
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-400">{contents}</div>
              </div>
              <div className="text-base font-medium leading-6">
                <a
                  className="text-purple-500 hover:text-purple-600"
                  aria-label='Read "Release of Tailwind Nextjs Starter Blog v2.0"'
                  href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </article>
      </li>
    </>
  );
}
