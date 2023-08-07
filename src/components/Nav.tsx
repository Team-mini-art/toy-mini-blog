import { BsFillPersonFill } from 'react-icons/Bs';
import { MdLightMode, MdModeNight } from 'react-icons/Md';
// import { FiSearch } from 'react-icons/Fi';

import { Link } from 'react-router-dom';

export default function Nav() {
  const mode = false;
  return (
    <nav className="flex items-center gap-4 sm:mt-0 sm:justify-start sm:gap-6 mt-5 justify-end">
      <Link to="/blog">Blog</Link>
      {/* <Link to="/tags">Tags</Link> */}
      {/* <Link to="/about">About</Link> */}
      <Link to="/login" className="text-2xl" aria-label="Login">
        <BsFillPersonFill />
      </Link>
      {/* <button className="text-2xl" aria-label="Search">
            <FiSearch />
          </button> */}
      <button className="text-2xl" aria-label="Toggle Dark Mode">
        {mode && <MdLightMode />}
        <MdModeNight />
      </button>
    </nav>
  );
}
