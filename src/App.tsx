import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="container-wrap">
        <Outlet />
      </div>
    </>
  );
}
