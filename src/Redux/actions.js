// Define action types for adding and removing items from the cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action creator for adding a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART, // Action type
  payload: product // Payload containing the product details
});

// Action creator for removing a product from the cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART, // Action type
  payload: id // Payload containing the id of the product to be removed
});
