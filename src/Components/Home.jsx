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
import arrowForward from "../assets/arrow_forward.svg"
import CategoryItem from "./CategoryItem";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
          <Link to='/category'>
          <button className="bg-pink-400 rounded-xl p-1 pl-3 pr-3 md:ml-40 text-sm font-sans">
            Shop Now
          </button></Link>
        </div>
      </div>

      {/* ICONS - SUPPORT , RETURNS ETC */}
      <div className="grid md:grid-cols-4 gap-3 justify-items-center items-center mt-20 ml-10 mr-10">
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
            src={credit}
            className="md:w-20 sm:w-16 border-2 border-zinc-400 p-4 rounded-full"
          />
          <p className="text-zinc-800 font-serif">Secure Payment</p>
        </div>
      </div>

      {/* CATEGORIES */}

      <div className="md:pl-10 mt-30 bg-zinc-50 p-5 ">
        <h1 className="text-zinc-800 text-3xl font-serif text-center">
          Categories
        </h1>

        <div className=" mt-14">
          <div className=" grid md:grid-cols-5 gap-5 justify-items-center items-center">
            <Link to='/women-tops'><CategoryItem item="Tops" src={womenTops} /></Link>
            <Link to='/women-dresses'><CategoryItem item="Dresses" src={womenDress} /></Link>
            <Link to='/women-bags'> <CategoryItem item="Bags" src={womenBags} /> </Link>
            <Link to='/women-shoes'> <CategoryItem item="Shoes" src={womenShoe} /></Link>
            <Link to='/women-watches'><CategoryItem item="Watches" src={womenWatch} /></Link>
            <Link to='/men-shirts'><CategoryItem item="Shirts" src={menShirt} /></Link>
            <Link to='/men-shoes'><CategoryItem item="Shoes" src={menShoe} /></Link>
            <Link to='/CategoryItem'><CategoryItem item="View All" src={arrowForward} /></Link>
          </div>
        </div>
      </div>
      <div className='bg-pink-700 mt-10 text-center text-slate-50 md:text-3xl sm:text-xl font-serif p-2'>
        <p>Get 20% Off On Order Above 599</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
