import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/reducers'; // Update the path as necessary

export const ProductItem = (props) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const product = {
      id: props.id,
      src: props.src,
      brand: props.brand,
      title: props.title,
      price: props.price
    };
    dispatch(addToCart(product));
    setAdded(true);
  };

  return (
    <div className='box-border max-w-fit h-fit overflow-hidden shadow-md shadow-zinc-400 p-4 cursor-pointer'>
      <Link to={`/product-details/${props.id}`}>
        <div className="w-48 h-64 overflow-hidden">
          <img src={props.src} alt='picture' className="w-full h-full object-cover" />
        </div>
        <p className='text-lg font-bold font-serif text-zinc-900'>{props.brand}</p>
        <p className='font-serif text-zinc-800 '>{props.title}</p>
        <p className='font-serif text-zinc-800 '>Rs. {props.price}</p>
      </Link>
      <button 
        className={`text-xs p-2 pl-3 pr-3 font-sans cursor-pointer ${added ? 'bg-green-500' : 'bg-pink-600'} text-slate-50`}
        onClick={handleAddToCart}
        disabled={added}
      >
        {added ? 'ADDED' : 'ADD TO CART'}
      </button>
    </div>
  );
};

export default ProductItem;
