import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../store/store';
import { logout } from '../store/features/authSlice';
import Title from '../components/Title';

export default function MyPage() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.value);

  return (
    <>
      <Title title="Log In" />

      <div>
        <p>nickname: {user.nickname}</p>
        <p>email: {user.email}</p>
        <button onClick={() => dispatch(logout())}>로그아웃</button>
      </div>
    </>
  );
}
