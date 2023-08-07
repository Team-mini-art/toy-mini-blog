import { PiFlowerTulipBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
  return (
    <>
      <header className="py-10 items-center justify-between sm:flex">
        <Link to="/">
          <h1 className="flex items-center gap-2 text-4xl">
            <span className="text-6xl">
              <svg width="0" height="0">
                <linearGradient
                  id="blue-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#a855f7" offset="0%" />
                  <stop stopColor="#fef08a" offset="100%" />
                </linearGradient>
              </svg>
              <PiFlowerTulipBold style={{ fill: 'url(#blue-gradient)' }} />
            </span>
            MiniBlog
          </h1>
        </Link>
        <Nav />
      </header>
    </>
  );
}
