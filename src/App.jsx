import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './Components/Home'
import ProductCategory from './Components/ProductCategory';
import ProductDetail from './Components/ProductDetail';

import WomenTop from './Components/All Products/WomenTop'
import WomenBag from './Components/All Products/WomenBag'
import WomenWatch from './Components/All Products/WomenWatch'
import WomenShoe from './Components/All Products/WomenShoe'
import Dress from './Components/All Products/Dress';

import Tablets from './Components/All Products/Tablets'
import Mobiles from './Components/All Products/Mobiles'
import Laptop from './Components/All Products/Laptop'
import Accessories from './Components/All Products/Accessories'

import Fragances from './Components/All Products/Fragances';
import Skincare from './Components/All Products/Skincare'
import Makeup from './Components/All Products/Makeup'

import MenWatch from './Components/All Products/MenWatch'
import MenSunglasses from './Components/All Products/MenSunglasses'
import MenShoe from './Components/All Products/MenShoe'
import MenShirt from './Components/All Products/MenShirt'

import NotFound from './Components/NotFound'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout';


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
    element:<Dress/>
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
    path:'/skincare',
    element:<Skincare/>
  },
  {
    path:'/fragances',
    element:<Fragances/>
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
    path:'/product-details/:id',
    element:<ProductDetail/>
  },
  {
    path:'/checkout',
    element:<Checkout/>
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
