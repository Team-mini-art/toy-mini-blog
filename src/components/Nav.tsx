import { BsFillPersonFill } from 'react-icons/bs';
// import { MdLightMode, MdModeNight } from 'react-icons/md';
// import { FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import IconGradient from './IconGradient';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';

export default function Nav() {
  const [isHover, setIsHover] = useState({
    login: false,
    mode: false,
  });
  const { isLoggedIn } = useSelector((state: RootState) => state.auth.value);

  const onHover = (key: string) => {
    setIsHover((prev) => ({ ...prev, [key]: true }));
  };

  const offHover = (key: string) => {
    setIsHover((prev) => ({ ...prev, [key]: false }));
  };

  // const mode = false;
  return (
    <nav className="flex items-center gap-4 sm:mt-0 sm:justify-start sm:gap-6 mt-5 justify-end">
      <Link to="/post" className="hover:text-gradient">
        My Blog
      </Link>
      <Link
        to={isLoggedIn ? '/profile' : '/login'}
        className="text-2xl"
        aria-label="Login"
        onMouseEnter={() => {
          onHover('login');
        }}
        onMouseLeave={() => {
          offHover('login');
        }}
      >
        <IconGradient id="login" />
        <BsFillPersonFill
          style={{ fill: isHover.login ? 'url(#login)' : '#111827' }}
        />
      </Link>
      {/* <button
        className="text-2xl"
        aria-label="Toggle Dark Mode"
        onMouseEnter={() => {
          onHover('mode');
        }}
        onMouseLeave={() => {
          offHover('mode');
        }}
      >
        <IconGradient id="mode" />
        {mode && <MdLightMode style={{ fill: 'url(#mode)' }} />}
        <MdModeNight
          style={{ fill: isHover.mode ? 'url(#mode)' : '#111827' }}
        />
      </button> */}
    </nav>
  );
}
