import { PiFlowerTulipBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import IconGradient from './IconGradient';

export default function Header() {
  return (
    <>
      <header className="py-10 items-center justify-between sm:flex">
        <Link to="/">
          <h1 className="flex items-center gap-2 text-3xl font-semibold">
            <span className="text-6xl">
              <IconGradient id="logo" />
              <PiFlowerTulipBold style={{ fill: 'url(#logo)' }} />
            </span>
            MiniBlog
          </h1>
        </Link>
        <Nav />
      </header>
    </>
  );
}
