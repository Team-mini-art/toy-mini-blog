import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../store/store';
import { logout } from '../store/features/auth/authSlice';

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.value);

  return (
    <div>
      <p>nickname: {user.nickname}</p>
      <p>email: {user.email}</p>
      <button onClick={() => dispatch(logout())}>로그아웃</button>
    </div>
  );
}
