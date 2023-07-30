import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/features/counter/counterSlice';

export default function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <div className='text-3xl text-center'>
        <button
        className='common-button'
          aria-label="Increment Amount value"
          onClick={() => dispatch(incrementByAmount(1))}
        >
          Increment Amount
        </button>
        <button
        className='common-button'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='px-10'>{count}</span>
        <button
        className='common-button'
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
