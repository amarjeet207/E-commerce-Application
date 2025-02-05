import React from "react";
import { Link } from "react-router-dom";
import womenDress from "../assets/women-dress.jpg";
import womenTops from "../assets/women-top.jpg";
import womenBags from "../assets/women-bags.jpg";
import womenShoe from "../assets/women-shoes.jpg";
import womenWatch from "../assets/women-watches.jpg";
import menShirt from "../assets/men-shirt.webp";
import menShoe from "../assets/men-shoe.webp";
import menSunglass from "../assets/men-sunglasses.webp";
import menWatch from "../assets/men-watch.jpg";
import makeup from "../assets/makeup.webp";
import skincare from "../assets/skincare.webp";
import perfume from "../assets/perfumes.avif";
import mobiles from "../assets/mobiles.jpg";
import tablet from "../assets/tablet.jpg";
import laptop from "../assets/laptop.jpg";
import accessories from "../assets/accessories.webp";
import CategoryItem from "./CategoryItem";
import Header from "./Header";
import Footer from "./Footer";

const ProductCategoryItem = () => {
  return (
    <div className="box-border">
      <Header />
      {/* CATEGORIES */}
      <div className="bg-pink-700 mt-10 text-center text-slate-50 md:text-3xl sm:xl font-serif p-2">
        <p>Get 20% Off On Order Above 599</p>
      </div>

      <div className="md:pl-10 mt-20 bg-zinc-50 p-5 ">
        <h1 className="text-zinc-800 text-3xl font-serif text-center">
          Categories
        </h1>

        {/* WOMEN CATEGORY-- */}
        <div className=" mt-14" id="women">
          <h1 className="text-zinc-800 text-2xl font-serif">Women</h1>

          <div className=" grid md:grid-cols-5 gap-5 justify-items-center">
            <Link to="/women-tops">
              <CategoryItem item="Tops" src={womenTops} />
            </Link>
            <Link to="/women-dresses">
              <CategoryItem item="Dresses" src={womenDress} />
            </Link>
            <Link to="/women-bags">
              <CategoryItem item="Bags" src={womenBags} />{" "}
            </Link>
            <Link to="/women-shoes">
              <CategoryItem item="Shoes" src={womenShoe} />
            </Link>
            <Link to="/women-watches">
              <CategoryItem item="Watches" src={womenWatch} />
            </Link>
          </div>
        </div>

        {/* MEN CATEGORY-- */}
        <div className=" mt-14" id="men">
          <h1 className="text-zinc-800 text-2xl font-serif">Men</h1>

          <div className=" grid md:grid-cols-5 gap-5 justify-items-center">
            <Link to="/men-shirts">
              <CategoryItem item="Shirts" src={menShirt} />
            </Link>
            <Link to="/men-shoes">
              <CategoryItem item="Shoes" src={menShoe} />
            </Link>
            <Link to="/men-sunglasses">
              <CategoryItem item="Sunglasses" src={menSunglass} />
            </Link>
            <Link to="/men-watches">
              <CategoryItem item="Watches" src={menWatch} />
            </Link>
          </div>
        </div>

        {/* ELECTRONICS CATEGORY-- */}
        <div className=" mt-14" id="electronics">
          <h1 className="text-zinc-800 text-2xl font-serif">Electronics</h1>

          <div className=" grid md:grid-cols-5 gap-5 justify-items-center">
            <Link to='/laptop'>  <CategoryItem item="Laptops" src={laptop} /></Link>
            <Link to='/mobile-accessories'><CategoryItem item="Accessories" src={accessories} /></Link>
            <Link to='/mobiles'>  <CategoryItem item="Smartphones" src={mobiles} /></Link>
            <Link to='/tablets'> <CategoryItem item="Tablets" src={tablet} /></Link>

          </div>
        </div>

        {/* BEAUTY CATEGORY-- */}
        <div className="mt-14" id="beauty">
          <h1 className="text-zinc-800 text-2xl font-serif">Beauty</h1>

          <div className=" grid md:grid-cols-5 gap-5 justify-items-center">
            <Link to='/makeup'>  <CategoryItem item="Makeup" src={makeup} /></Link>
            <Link to='/fragances'> <CategoryItem item="Fragances" src={perfume} /></Link>
            <Link to='/skincare'> <CategoryItem item="Skin-care" src={skincare} /></Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductCategoryItem;
