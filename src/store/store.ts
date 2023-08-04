import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import counterReducer from './features/counterSlice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

//

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/auth/authSlice';
// import counterReducer from './features/counter/counterSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     counter: counterReducer,
//   },
// });

// export default store;
// export type RootState = ReturnType<typeof store.getState>;
