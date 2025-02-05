// Import necessary modules and components
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem"; 
import Header from "./Header";
import Footer from "./Footer"; 
import useFetchProducts from "./Hooks/useFetchProducts";
import Search from '../assets/search.svg';


const ProductList = (props) => {

  const [inputValue, setInputValue] = useState('');  // State to manage search input value

  const { products, loading, error } = useFetchProducts(); // Use custom hook to fetch products and manage loading and error states

  const [filteredProducts, setFilteredProducts] = useState([])   // State to manage filtered products


  // useEffect to filter products based on search input and products data
  useEffect(() => {
    let result = products;

    // Filter products based on search input
    if (inputValue) {
      result = result.filter(products => 
        products.title.toLowerCase().includes(inputValue.toLowerCase()) 
      );
    }
    setFilteredProducts(result);
  }, [inputValue, products]);


  // Handle search input change
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // Display loading message while products are being fetched
  if (loading)
    return (
      <p className="text-center text-5xl text-slate-500 bg-pink-100 w-screen h-screen">
        Loading...
      </p>
    );

  // Display error message if there is an issue fetching products
  if (error) 
    return (
      <p className="text-center text-5xl text-slate-500 bg-pink-100 w-screen h-screen">
        Error fetching products.
      </p>
    );


  return (
    <div>

      <Header />

      {/* Display heading passed as a prop and Search input */}
      <div className="flex gap-10 justify-between p-4  items-center mt-16">
      <h1 className="xs:text-xl sm:text-3xl underline font-serif text-zinc-700 ">
        {props.heading}
      </h1>

       {/* Search */}
       <span className="border border-slate-300 flex justify-center gap-1 p-1 pl-2 max-w-fit rounded-lg">
          <img src={Search} className="w-5 cursor-pointer"/>
          <input 
            type="text" 
            name="search" 
            className="max-w-30 rounded-lg outline-none" 
            placeholder="Search" 
            onChange={handleInputValue} 
            value={inputValue} 
          />
        </span>

      </div>
     

      {/* Render the list of products filtered by category */}
      <div className="m-20 grid md:grid-cols-3 gap-24 justify-items-center items-center">
        {filteredProducts.map(
          (product) =>
            product.category === props.category && (
              <ProductItem
                key={product.id} // Unique key for each product item
                id={product.id}
                price={product.price}
                src={product.thumbnail}
                brand={product.brand}
                title={product.title}
              />
            )
        )}
      </div>

      <Footer />
    </div>
  );
};


export default ProductList;
