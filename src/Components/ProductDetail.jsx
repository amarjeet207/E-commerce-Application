import React from 'react'
import Header from './Header'
import Footer from './Footer'
import star from "../assets/star2.svg"
import useFetchProducts from "./Hooks/useFetchProducts";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const {id} = useParams();

  const { products, loading, error } = useFetchProducts();
  if (loading)
    return (
      <p className="text-center text-5xl text-slate-500 bg-pink-100 w-screen h-screen">
        Loading...
      </p>
    );
  if (error) return <p className="text-center text-5xl text-slate-500 bg-pink-100 w-screen h-screen">Error fetching products.</p>;


  const product = products.filter(product => product.id == id)[0];

  return (

    <div className='box-border font-serif max-w-screen h-screen'>
      <Header/>
      <h1 className='text-center mt-10 text-3xl text-zinc-800'>Product Details</h1>

      <div className='  mt-10 max-w-screen h-fit flex gap-5 xs:flex-col xs:items-center md:flex-row md:justify-center md:items-start '>


        <div className=' w-90 h-80 overflow-hidden'>
          <img src={product.thumbnail}  className='w-full h-full object-center'/>
        </div>

        <div className=' w-90 h-fit overflow-hidden p-4 '>
          <p className='text-2xl text-zinc-800 '>{product.title}</p>
          <p className='text-lg text-zinc-800 mt-2 '>{product.brand}</p>

          <div className='flex gap-1'>
          <span className='text-md text-zinc-600 '>{product.rating}</span>
          <img src={star}/>
          <span className='text-md text-zinc-600'>({product.reviews.length} Reviews)</span>
          </div>

          <p className='text-lg text-zinc-800 mt-2 '>Rs. {product.price}</p>
          <p className='text-sm text-zinc-600 mt-2'>{product.description}</p>
          <div className='flex gap-4 mt-5'>
          <button className='bg-pink-600 text-slate-50 text-xs p-2 pl-2 pr-2  font-sans cursor-pointer'>Add To Cart</button>
          <button className='bg-zinc-800 text-slate-50 text-xs p-2 pl-3 pr-3  font-sans cursor-pointer'>Buy Now</button>
          </div>
          <div className='text-md text-zinc-800 mt-6 '>In Stock: {product.stock}</div>
          <div className='text-md text-zinc-800 mt-1 '>SKU: {product.sku}</div>
          <div className='text-md text-zinc-800 mt-1 '>Tags: {product.tags.join(', ')}</div>
    
        </div>
      </div>


      <div className='mt-20 max-w-screen p-16'> 
        <h1 className='text-3xl text-zinc-900 mb-5'>Reviews</h1>

        {product.reviews.map((review,index) =>( 

           <div key={index} className="mb-5 bg-zinc-100 p-4">
            <div className='flex'> 
            {Array.from({ length: review.rating }, (v, i) => (
            <img key={i} src={star} alt='star' className='w-6 mb-3' />
          ))} 
            </div>
           <p className='text-zinc-600 mb-3'>{review.comment}</p>
           <p> ~ {review.reviewerName}</p>
         </div>
        ) 
      )}
      </div>
      
      <Footer/>

    </div>
  )
}

export default ProductDetail
