import React from "react";

const CategoryItem = (props) => {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center md:w-36 sm:w-16 h-fit cursor-pointer">
        <div className=" w-28 h-28 rounded-full overflow-hidden">
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

export default CategoryItem;
