import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='font-serif box-border max-w-screen'>
      <Header />
      <h1 className='mt-14 mb-10 text-3xl text-zinc-800 text-center'>Your Shopping Bag</h1>

      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))
        ) : (
          <p className='text-center text-2xl text-zinc-700'>Your bag is empty.</p>
        )}
      </div>

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
