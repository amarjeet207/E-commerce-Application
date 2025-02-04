import React from 'react'
import Header from './Header'
import Footer from './Footer'
import womenTop from "../assets/women-top.jpg"
import womenDress from "../assets/women-dress.jpg"
import womenBags from "../assets/women-bags.jpg"
import star from "../assets/star2.svg"

const ProductDetail = () => {
  return (
    <div className='box-border font-serif max-w-screen h-screen'>
      <Header/>
      <h1 className='text-center mt-10 text-3xl text-zinc-800'>Product Details</h1>

      <div className='  mt-10 max-w-screen h-fit flex gap-5 xs:flex-col xs:items-center md:flex-row md:justify-center md:items-start '>

        <div className=' w-90 h-80 overflow-hidden'>
          <img src={womenBags}  className='w-full h-full object-center'/>
        </div>

        <div className=' w-90 h-fit overflow-hidden p-4 '>
          <p className='text-2xl text-zinc-800 '>Tops</p>
          <p className='text-lg text-zinc-800 mt-2 '>Brand Name</p>

          <div className='flex gap-1'>
          <span className='text-md text-zinc-600 '>4.5</span>
          <img src={star}/>
          <span className='text-md text-zinc-600'>(245 Review)</span>
          </div>

          <p className='text-lg text-zinc-800 mt-2 '>Rs. 799</p>
          <p className='text-sm text-zinc-600 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid ducimus cupiditate consectetur, corrupti sunt nesciunt in. Illo, eum laboriosam!</p>
          <div className='flex gap-4 mt-5'>
          <button className='bg-pink-600 text-slate-50 text-xs p-2 pl-2 pr-2  font-sans cursor-pointer'>Add To Cart</button>
          <button className='bg-zinc-800 text-slate-50 text-xs p-2 pl-3 pr-3  font-sans cursor-pointer'>Buy Now</button>
          </div>
          <div className='text-md text-zinc-800 mt-6 '>In Stock: 4</div>
          <div className='text-md text-zinc-800 mt-1 '>SKU: RCH45Q1A</div>
          <div className='text-md text-zinc-800 mt-1 '>Tags: Beauty, Mascara</div>
    
        </div>
      </div>
      
      <Footer/>

    </div>
  )
}

export default ProductDetail
