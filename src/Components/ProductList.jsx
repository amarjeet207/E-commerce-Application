// Import necessary modules and components
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem"; 
import Header from "./Header";
import Footer from "./Footer"; 
import useFetchProducts from "./Hooks/useFetchProducts";

// Define the ProductList component
const ProductList = (props) => {
  // Use custom hook to fetch products and manage loading and error states
  const { products, loading, error } = useFetchProducts();

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

  // Render the product list
  return (
    <div>

      <Header />

      {/* Display heading passed as a prop */}
      <h1 className="ml-10 text-3xl underline font-serif text-zinc-700 mt-16">
        {props.heading}
      </h1>

      {/* Render the list of products filtered by category */}
      <div className="m-20 grid md:grid-cols-3 gap-24 justify-items-center items-center">
        {products.map(
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
