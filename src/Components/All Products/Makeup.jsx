import React from 'react'
import ProductItem  from '../ProductItem'
import Header from '../Header'
import womenTop from "../../assets/women-top.jpg"

const makeup = () => {
  return (
    <div className='box-border max-w-screen h-screen'>
    <Header/>
    <h1 className='ml-10 text-3xl underline font-serif text-zinc-700 mt-16'>Makeup</h1>

    <div className='m-20 grid md:grid-cols-3 gap-24 justify-items-center items-center '>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>
    <ProductItem brand='Mango' title="Crop top" price="299" src={womenTop}/>

    </div>
 
  </div>
  )
}

export default makeup
