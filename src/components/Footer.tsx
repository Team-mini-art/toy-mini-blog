import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pb-8">
      <div className="mt-16 flex flex-col items-center">
        <div className="pb-2 flex gap-2 text-sm text-gray-500">
          <div>© 2023</div>
          <div> • </div>
          <div>Toy Project</div>
          <div> • </div>
          <div>Mini Blog</div>
        </div>
        <div className="text-sm text-gray-500">
          <Link to="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  );
}
