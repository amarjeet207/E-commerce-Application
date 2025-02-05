import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './reducers'; // Update the path to your reducers

// Configuration object for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer using the configuration and the cart reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Temporarily disable serializable check
  }),
});

// Create a persistor to manage the persisted state
const persistor = persistStore(store);

// Export the store and persistor to be used in the application
export { store, persistor };
