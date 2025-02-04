import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Header from "./Header";
import Footer from "./Footer";
import useFetchProducts from "./Hooks/useFetchProducts";

const ProductList = (props) => {

  const { products, loading, error } = useFetchProducts();
  if (loading)
    return (
      <p className="text-center text-5xl text-slate-500 bg-pink-100 w-screen h-screen">
        Loading...
      </p>
    );
  if (error) return <p className="text-center text-5xl text-slate-500 bg-pink-100 w-screen h-screen">Error fetching products.</p>;

  return (
    <div>
      <Header />
      <h1 className="ml-10 text-3xl underline font-serif text-zinc-700 mt-16">
       {props.heading}
      </h1>

      <div className="m-20 grid md:grid-cols-3 gap-24 justify-items-center items-center ">
        {products.map(
          (product) =>
            product.category === props.category && (
              <ProductItem
                key={product.id}
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
  )
}

export default ProductList
