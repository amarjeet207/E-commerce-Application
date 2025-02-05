// Import necessary modules and components
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header'; 
import Footer from './Footer'; 
import CartItem from './CartItem'; 
import { Link } from "react-router-dom";
import { clearCart } from '../Redux/reducers'; 

// Define the Cart component
const Cart = () => {
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store

  // Use useSelector to get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  
  // Calculate the total amount by summing up the prices of all cart items
  const totalAmount = cartItems.reduce((total, item) => Math.floor(total + item.price * item.quantity), 0);

  // Function to handle checkout and empty the cart
  const handleCheckout = () => {
    dispatch(clearCart()); // Dispatch the clearCart action to empty the cart
  };

  return (
    <div className='font-serif box-border max-w-screen'>
      {/* Render Header component */}
      <Header />
      
      <h1 className='mt-14 mb-10 text-3xl text-zinc-800 text-center'>Your Shopping Bag</h1>

      <div>
        {/* Check if there are any items in the cart */}
        {cartItems.length > 0 ? (
          // Map over the cart items and render CartItem for each item
          cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))
        ) : (
          // Display message if the cart is empty
          <p className='text-center text-2xl text-zinc-700'>Your bag is empty.</p>
        )}
      </div>

      {/* Display the total amount only if there are items in the cart */}
      {cartItems.length > 0 && (
        <div className='flex justify-around p-2 bg-zinc-200 text-zinc-800 text-2xl mt-10 md:mr-20 md:ml-20 rounded-md'>
          <p>Total Amount</p>
          <p className=''>Rs. {totalAmount}</p>
        </div>
      )}

      <Link to='/checkout'>

      { cartItems.length > 0 && (
          <div 
          className='text-center p-2 bg-pink-500 text-slate-100 text-2xl md:mr-20 md:ml-20 rounded-md cursor-pointer'
          onClick={handleCheckout} // Add the onClick handler
        >
         Check Out 
       </div>

      )

      }
       
      </Link>

      <Footer />
    </div>
  );
};

export default Cart;
