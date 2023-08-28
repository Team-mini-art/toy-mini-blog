import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import Post from '../pages/Post';
import View from '../pages/View';
import PostNew from '../pages/PostNew';
import PostUpdate from '../pages/PostUpdate';
import Profile from '../pages/Profile';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

const routes = [
  {
    path: '/',
    element: <Home />,
    isPrivate: false,
  },
  {
    path: '/post',
    element: <Post />,
    isPrivate: false,
  },
  {
    path: '/post/:id',
    element: <View />,
    isPrivate: false,
  },
  {
    path: '/new',
    element: <PostNew />,
    isPrivate: true,
  },
  {
    path: '/modify/:id',
    element: <PostUpdate />,
    isPrivate: true,
  },
  {
    path: '/profile',
    element: <Profile />,
    isPrivate: true,
  },
  {
    path: '/login',
    element: <Login />,
    isPrivate: false,
  },
  {
    path: '/signup',
    element: <Signup />,
    isPrivate: false,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map(({ path, element, isPrivate }) => ({
      path,
      element: isPrivate ? (
        <PrivateRoute>{element}</PrivateRoute>
      ) : (
        // <PublicRoute>{element}</PublicRoute>
        element
      ),
    })),
  },
]);

export default router;
