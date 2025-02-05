// Import necessary modules from Redux Toolkit and Redux Persist
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cartReducer from './reducers'; // Import the cart reducer

// Configuration object for Redux Persist
const persistConfig = {
  key: 'root', // Key for the persisted state in localStorage
  storage // Storage engine to use (localStorage in this case)
};

// Create a persisted reducer using the configuration and the cart reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: {
    cart: persistedReducer // Use the persisted reducer for the cart state
  }
});

// Create a persistor to manage the persisted state
const persistor = persistStore(store);

// Export the store and persistor to be used in the application
export { store, persistor };
