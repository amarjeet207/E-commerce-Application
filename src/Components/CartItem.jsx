// Import necessary modules and actions
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Redux/reducers';

// Define the CartItem component
const CartItem = ({ product }) => {
const dispatch = useDispatch(); // Get the dispatch function from the Redux store

  return (
    <div className='font-serif box-border max-w-screen'>

      <div className='border-t-1 max-w-screen border-zinc-200 p-2 flex justify-center items-center xs:gap-5 sm:10 md:gap-20'>
        
        <div className='xs:w-24 xs:h-20 md:w-30 md:h-40 overflow-hidden'>
          <img src={product.src} className='w-full h-full object-center' alt='product' />
        </div>

        <div className='flex xs:flex-col md:flex-row xs:gap-5 sm:10 md:gap-40 items-center'>
          <div className='flex xs:flex-row xs:gap-4 xs:items-center md:gap-0 md:flex-col'>
            <p className='xs:text-xl md:text-2xl text-zinc-800'>{product.title}</p>
            <p className='xs:text-md md:text-lg text-zinc-800 mt-2'>{product.brand}</p>
          </div>

          <div className='mt-2 flex gap-3 items-center bg-pink-500 pl-3 pr-3 rounded-md text-lg text-slate-200'>
            <button className='cursor-pointer' onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
            <span>{product.quantity}</span>
            <button className='cursor-pointer' onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
          </div>

          <div className='flex xs:gap-2 sm:5 md:gap-40'>
            <p className='text-lg text-zinc-800'>Rs. {product.price}</p>
            <img src={close} className='w-5 cursor-pointer' alt='remove' onClick={() => dispatch(removeFromCart(product.id))} />
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default CartItem;
