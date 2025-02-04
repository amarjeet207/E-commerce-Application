import React from 'react'
import womenTops from "../assets/women-top.jpg"
import womenDress from "../assets/women-dress.jpg"
import womenBags from "../assets/women-bags.jpg"
import womenShoe from "../assets/women-shoes.jpg"
import tablet from "../assets/tablet.jpg";
import { Link } from 'react-router-dom'

export const ProductItem = (props) => {
  return (
    
    <div className='box-border max-w-fit h-fit overflow-hidden shadow-md shadow-zinc-400 p-4 cursor-pointer '>
      <Link to='/product-details'>
      <div className=" w-48 h-64 overflow-hidden">
      <img src={tablet} className="w-full h-full object-cover"  />
      </div>
      <p className='text-lg font-bold font-serif text-zinc-900'>{props.brand}</p>
      <p className='font-serif text-zinc-800 '>{props.title}</p>
      <p className='font-serif text-zinc-800 '>Rs. {props.price}</p>
      </Link>
      <button className='bg-pink-600 text-slate-50 text-xs p-2 pl-3 pr-3 font-sans cursor-pointer'>ADD TO CART</button>
    </div>
  )
}


export default ProductItem
