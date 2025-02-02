import React from 'react'
import facebook from '../assets/facebook-brands-solid.svg'
import insta from '../assets/instagram-brands-solid.svg'
import twitter from '../assets/twitter-brands-solid.svg'

const Footer = () => {
  return (
    <div className=" max-w-screen h-28 flex flex-col gap-4 p-4 items-center  border-t-1 border-zinc-400  mt-28">
      <div className=" flex justify-center items-center gap-5">
      <div className="font-serif text-lg text-zinc-500 ">Follow Us</div>
      <img src={facebook} alt="facebook"   className="w-5" />
      <img src={twitter} alt="twitter"  className="w-5" />
      <img src={insta} alt="instagram" className="w-5" /> 
      </div>
      <div className="font-serif text-lg text-zinc-500 ">All rights reserved with <span className='text-pink-400'>ShoppyGlobe</span> </div>
    </div>
  )
}

export default Footer
