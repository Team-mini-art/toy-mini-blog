import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <section className="mx-auto px-4 max-w-screen-lg min-h-screen flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}
