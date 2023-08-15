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

// Query
import { QueryClient, QueryClientProvider } from 'react-query';

const persistor = persistStore(store);
const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
  // <React.StrictMode></React.StrictMode>
);
