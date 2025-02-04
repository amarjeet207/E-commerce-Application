import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   <div className="h-screen w-screen  bg-pink-300 flex justify-center items-center">
     <div className="text-center text-4xl text-slate-100 ">
      404 - No Such Page Found : Go back to <Link to="/" className="text-emerald-600">Home</Link>
    </div>
   </div>
   
  )
}

export default NotFound
