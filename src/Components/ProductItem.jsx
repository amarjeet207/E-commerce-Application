// Import necessary modules and components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/reducers'; 

// Define the ProductItem component
export const ProductItem = (props) => {
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store
  const [added, setAdded] = useState(false); // State to track if the product has been added to the cart

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    const product = {
      id: props.id,
      src: props.src,
      brand: props.brand,
      title: props.title,
      price: props.price
    };

    dispatch(addToCart(product)); // Dispatch the addToCart action with the product details
    setAdded(true); // Set the added state to true
  };

  return (
    <div className='box-border max-w-fit h-fit overflow-hidden shadow-md shadow-zinc-400 p-4 cursor-pointer'>
     
      {/* Link to the product details page */}
      <Link to={`/product-details/${props.id}`}>
        <div className="w-48 h-64 overflow-hidden">
          <img src={props.src} alt='picture' className="w-full h-full object-cover" />
        </div>
        <p className='text-lg font-bold font-serif text-zinc-900'>{props.brand}</p>
        <p className='font-serif text-zinc-800 '>{props.title}</p>
        <p className='font-serif text-zinc-800 '>Rs. {props.price}</p>
      </Link>

      {/* Button to add the product to the cart */}
      <button 
        className={`text-xs p-2 pl-3 pr-3 font-sans cursor-pointer ${added ? 'bg-green-500' : 'bg-pink-600'} text-slate-50`}
        onClick={handleAddToCart}
        disabled={added} // Disable the button if the product has been added
      >
        {added ? 'ADDED' : 'ADD TO CART'} // Change the button text based on the added state
      </button>
    </div>
  );
};


export default ProductItem;
