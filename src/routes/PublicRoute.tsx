import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../store/store';

export default function PublicRoute({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth.value);
  return isLoggedIn ? <Navigate to="/" /> : children;
}
