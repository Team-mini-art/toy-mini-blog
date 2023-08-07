import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <section className="mx-auto max-w-screen-lg px-4">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}
