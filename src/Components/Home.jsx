import React from 'react'
import Header from './Header'
import bg from '../assets/home-bg2.jpeg'

const Home = () => {
  return (
    <div className='box-border'>
        <Header/>
        <div className='max-w-screen h-96 bg-cover bg-right-top' style={{ height: 500 ,backgroundImage: `url(${bg})`}}>

         <div className=' flex flex-col gap-2 lg:ml-9  items-start justify-center h-full '>
          <p className='text-zinc-700 font-mono md:text-4xl '>DISCOVER LASTEST TREND</p>
          <button className='bg-pink-400 rounded-lg p-1 pl-2 pr-2 md:ml-40 text-sm font-sans'>Shop Now</button>
         </div>
        </div>
    </div>
  )
}

export default Home
