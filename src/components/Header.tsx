import Logo from './Logo';

import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
  return (
    <>
      <header className="py-10 items-center justify-between sm:flex">
        <Link to="/">
          <h1 className="flex items-center gap-2 text-3xl font-semibold">
            <Logo addClass="text-6xl" />
            MiniBlog
          </h1>
        </Link>
        <Nav />
      </header>
    </>
  );
}
