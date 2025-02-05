// Import createSlice from @reduxjs/toolkit to create a slice of the Redux store
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the cart with initial state and reducers
const cartSlice = createSlice({
  name: 'cart', // Name of the slice
  initialState: {
    cartItems: [] // Initial state with an empty array for cart items
  },
  reducers: {
    // Reducer to add an item to the cart
    addToCart(state, action) {
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    // Reducer to remove an item from the cart
    removeFromCart(state, action) {
      // Filter out the item to be removed based on the id
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    // Reducer to increase the quantity of an item in the cart
    increaseQuantity(state, action) {
      // Find the item in the cart based on the id
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        // Increment the quantity if the item exists
        item.quantity += 1;
      }
    },
    // Reducer to decrease the quantity of an item in the cart
    decreaseQuantity(state, action) {
      // Find the item in the cart based on the id
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        // Decrement the quantity if the item exists and quantity is greater than 1
        item.quantity -= 1;
      }
    },
     // Reducer to clear the cart
     clearCart(state) {
      state.cartItems = [];
    }
  }
});

// Export the action creators and reducer
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
