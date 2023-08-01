import ReactDOM from 'react-dom/client';
import './index.css';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';
// redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
  // <React.StrictMode></React.StrictMode>
);
