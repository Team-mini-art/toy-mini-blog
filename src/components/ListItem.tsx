export default function ListItem() {
  // 게시글 id, 제목, 내용, 회원id 생성일 수정일
  return (
    <li className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500">
              <time dateTime="2023-08-05T00:00:00.000Z">August 5, 2023</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <button>Release of Tailwind Nextjs Starter Blog v2.0</button>
                </h2>
              </div>
              <div className="prose max-w-none text-gray-400">
                Release of Tailwind Nextjs Starter Blog template v2.0,
                refactored with Nextjs App directory and React Server Components
                setup.Discover the new features and how to migrate from V1.
              </div>
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
  );
}

// border-radius: 50px;
// background: linear-gradient(145deg, #cacaca, #f0f0f0);
// box-shadow:  0.1rem 0.1rem 0.2rem #bebebe, -0.1rem -0.1rem 0.2rem #ffffff;
