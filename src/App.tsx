import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/features/counter/counterSlice';

export default function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="container-wrap pb-40">
        <Outlet />
      </div>
    </>
  );
}
