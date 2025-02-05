// Import necessary modules and components
import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header'; 
import Footer from './Footer'; 
import CartItem from './CartItem'; 

// Define the Cart component
const Cart = () => {
  // Use useSelector to get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  
  // Calculate the total amount by summing up the prices of all cart items
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

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
        <div className='flex justify-around xl:justify-center xl:gap-80 p-2 bg-pink-800 text-slate-200 text-2xl m-10 mr-20 ml-20 rounded-md'>
          <p>Total Amount</p>
          <p className='mr-10'>Rs. {totalAmount}</p>
        </div>
      )}


      <Footer />
    </div>
  );
};

export default Cart;
