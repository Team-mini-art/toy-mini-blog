import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import View from '../pages/View';
import NewPost from '../pages/NewPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <View />,
      },
      {
        path: '/new',
        element: <NewPost />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

export default router;
