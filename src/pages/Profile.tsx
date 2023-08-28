import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../store/store';
import { logout } from '../store/features/authSlice';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.value);

  return (
    <>
      <Title title="My Profile" />
      <div className="py-12 mx-auto w-full sm:w-96 text-center">
        <Logo addClass="flex justify-center text-8xl" />
        <h3 className="mt-6 text-4xl font-bold">{user.nickname}</h3>
        <p className="mt-2 text-lg text-gray-500">{user.email}</p>
      </div>
      <div className="mt-12 text-right">
        <Link
          to="/"
          className="mt-2 button-hover"
          onClick={() => dispatch(logout())}
        >
          Log Out
        </Link>
      </div>
    </>
  );
}
