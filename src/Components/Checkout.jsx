import React from 'react'
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className='box-border max-w-screen font-serif flex mt-20 justify-center items-center'>
     <div className='bg-pink-400 p-20 text-slate-100 flex flex-col gap-5'>
        <h1 className='text-5xl'>Your Order Is Placed</h1>
        <h2 className='text-2xl'>Thank You For Shopping With Us!</h2>
        <Link to='/'>
        <h3 className='text-xl bg-zinc-900 p-2 text-center'>Return to Homepage 👈 </h3>
        </Link>
     </div>
    </div>
  )
}

export default Checkout
