import React from "react";

const ProductList = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center md:w-36 sm:w-16 h-fit cursor-pointer">
        <div className=" sm:w-10 sm:h-10 md:w-28 md:h-28  rounded-full overflow-hidden">
          <img
            src={props.src}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="text-zinc-800 font-serif">{props.item}</p>
      </div>
    </div>
  );
};

export default ProductList;
