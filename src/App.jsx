import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './Components/Home'
import ProductCategory from './Components/ProductCategory';
import ProductDetail from './Components/ProductDetail';

import WomenTop from './Components/All Products/womenTop'
import WomenBag from './Components/All Products/womenBag'
import WomenDress from './Components/All Products/womenDress'
import WomenWatch from './Components/All Products/womenWatch'
import WomenShoe from './Components/All Products/womenShoe'

import Tablets from './Components/All Products/tablets'
import Mobiles from './Components/All Products/mobiles'
import Laptop from './Components/All Products/laptop'
import Accessories from './Components/All Products/accessories'

import Perfume from './Components/All Products/perfume'
import Skincare from './Components/All Products/skincare'
import Makeup from './Components/All Products/makeup'

import MenWatch from './Components/All Products/menWatch'
import MenSunglasses from './Components/All Products/menSunglasses'
import MenShoe from './Components/All Products/menShoe'
import MenShirt from './Components/All Products/menShirt'

import NotFound from './Components/NotFound'
import Cart from './Components/Cart'


const App = () => {

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/category',
    element:<ProductCategory/>
  },
  {
    path:'/women-tops',
    element:<WomenTop/>
  },
  {
    path:'/women-bags',
    element:<WomenBag/>
  },
  {
    path:'/women-shoes',
    element:<WomenShoe/>
  },
  {
    path:'/women-watches',
    element:<WomenWatch/>
  },
  {
    path:'/women-dresses',
    element:<WomenDress/>
  },
  {
    path:'/men-shirts',
    element:<MenShirt/>
  },
  {
    path:'/men-shoes',
    element:<MenShoe/>
  },
  {
    path:'/men-sunglasses',
    element:<MenSunglasses/>
  },
  {
    path:'/men-watches',
    element:<MenWatch/>
  },
  {
    path:'/makeup',
    element:<Makeup/>
  },
  {
    path:'/perfumes',
    element:<Perfume/>
  },
  {
    path:'/skincare',
    element:<Skincare/>
  },
  {
    path:'/laptop',
    element:<Laptop/>
  },
  {
    path:'/tablets',
    element:<Tablets/>
  },
  {
    path:'/mobiles',
    element:<Mobiles/>
  },
  {
    path:'/mobile-accessories',
    element:<Accessories/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/product-details',
    element:<ProductDetail/>
  },
  {
    path:'*',
    element:<NotFound/>
  }
 
])

  return (
    <div className='box-border'>
      <RouterProvider router={router}/>
    </div>
  
  )
}

export default App
