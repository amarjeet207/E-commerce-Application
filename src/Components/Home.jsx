import React from "react";
import Header from "./Header";
import bg from "../assets/home-bg2.jpeg";
import credit from "../assets/credit_score.svg";
import delivery from "../assets/delivery_truck.svg";
import returns from "../assets/package.svg";
import support from "../assets/support_agent.svg";
import womenDress from "../assets/women-dress.jpg"
import womenTops from "../assets/women-top.jpg"
import womenBags from "../assets/women-bags.jpg"
import womenShoe from "../assets/women-shoes.jpg"
import womenWatch from "../assets/women-watches.jpg"
import menShirt from "../assets/men-shirt.webp"
import menShoe from "../assets/men-shoe.webp"
import menSunglass from "../assets/men-sunglasses.webp"
import menWatch from "../assets/men-watch.jpg"
import makeup from "../assets/makeup.webp"
import skincare from "../assets/skincare.webp"
import perfume from "../assets/perfumes.avif"

import mobiles from "../assets/mobiles.jpg"
import tablet from "../assets/tablet.jpg"
import laptop from "../assets/laptop.jpg"
import accessories from "../assets/accessories.webp"

import ProductList from "./ProductList";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="box-border max-w-screen">
      {/* HEADER */}
      <Header />

      {/* BG IMAGE */}
      <div
       id="home"
        className="max-w-screen h-96 bg-cover bg-right-top"
        style={{ height: 500, backgroundImage: `url(${bg})` }}
      >
        <div className=" flex flex-col gap-2 ml-9  items-start justify-center h-full ">
          <p className="text-zinc-700 font-mono md:text-4xl ">
            DISCOVER LASTEST TREND
          </p>
          <button className="bg-pink-400 rounded-xl p-1 pl-3 pr-3 md:ml-40 text-sm font-sans">
            Shop Now
          </button>
        </div>
      </div>

      {/* ICONS - SUPPORT , RETURNS ETC */}
      <div className="grid grid-cols-5 gap-5 justify-items-center items-center mt-20 ml-2 mr-2">
        <div className="flex flex-col">
          <img
            src={delivery}
            className="md:w-20 sm:w-16 border-2 border-zinc-400 p-4 rounded-full mb-2"
          />
          <p className="text-zinc-800 font-serif">Free Delivery</p>
        </div>

        <div className="flex flex-col">
          <img
            src={support}
            className="md:w-20 sm:w-16 border-2 border-zinc-400 p-4 rounded-full mb-2"
          />
          <p className="text-zinc-800 font-serif">Support 24*7</p>
        </div>

        <div className="flex flex-col">
          <img
            src={returns}
            className="md:w-20 sm:w-16 border-2 border-zinc-400 p-4 rounded-full mb-2"
          />
          <p className="text-zinc-800 font-serif">Easy Returns</p>
        </div>

        <div className="flex flex-col">
          <img
            src={returns}
            className="md:w-20 sm:w-16 border-2 border-zinc-400 p-4 rounded-full mb-2"
          />
          <p className="text-zinc-800 font-serif">Easy Exchange</p>
        </div>

        <div className="flex flex-col">
          <img
            src={credit}
            className="md:w-20 sm:w-16 border-2 border-zinc-400 p-4 rounded-full"
          />
          <p className="text-zinc-800 font-serif">Secure Payment</p>
        </div>
      </div>

      {/* CATEGORIES */}

      <div className="md:pl-10 mt-28 bg-zinc-50 p-5 ">
        <h1 className="text-zinc-800 text-3xl font-serif text-center">
          Categories
        </h1>

        {/* WOMEN-- */}
        <div className=" mt-14" id="women">
          <h1 className="text-zinc-800 text-2xl font-serif">Women</h1>

          <div className=" grid grid-cols-5 gap-5 justify-items-center">
            <ProductList item="Tops" src={womenTops} />
            <ProductList item="Dresses" src={womenDress} />
            <ProductList item="Bags" src={womenBags} />
            <ProductList item="Shoes" src={womenShoe} />
            <ProductList item="Watches" src={womenWatch} />
          </div>
        </div>

        {/* MEN-- */}
        <div className=" mt-14" id="men">
          <h1 className="text-zinc-800 text-2xl font-serif">Men</h1>

          <div className=" grid grid-cols-5 gap-5 justify-items-center">
            <ProductList item="Shirts" src={menShirt} />
            <ProductList item="Jeans" src={menShirt} />
            <ProductList item="Sunglasses" src={menSunglass} />
            <ProductList item="Watches" src={menWatch} />
            <ProductList item="Shoes" src={menShoe} />
          </div>
        </div>

         {/* ELECTRONICS-- */}
         <div className=" mt-14" id="electronics">
          <h1 className="text-zinc-800 text-2xl font-serif">Electronics</h1>

          <div className=" grid grid-cols-5 gap-5 justify-items-center">
            <ProductList item="Laptops" src={laptop} />
            <ProductList item="Headphones" src={laptop} />
            <ProductList item="Accessories" src={accessories} />
            <ProductList item="Smartphones" src={mobiles} />
            <ProductList item="Tablets" src={tablet} />
          </div>
        </div>

        {/* BEAUTY-- */}
        <div className="mt-14" id="beauty">
          <h1 className="text-zinc-800 text-2xl font-serif">Beauty</h1>

          <div className=" grid grid-cols-5 gap-5 justify-items-center">
            <ProductList item="Makeup" src={makeup} />
            <ProductList item="Fragances" src={perfume} />
            <ProductList item="Skin-care" src={skincare} />
            <ProductList item="Bath" src={skincare} />
            <ProductList item="Tools" src={skincare} />
          </div>
        </div>

       
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
