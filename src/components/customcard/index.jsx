import React from "react";
import like from "../../shared/assets/icons/like.svg";
const CustomCard = ({ value }) => {
  return (
    <div className="mx-auto w-fit">
      <div className="relative w-fit">
        <img
          className="w-[200px] h-[200px] rounded-lg overflow-hidden"
          src={value.img}
          alt=""
        />
        <img
          className="absolute
        top-3 right-3"
          src={like}
          alt=""
        />
      </div>
      <h1 className="text-[#adadad] font-thin ">{value.title}</h1>
      <p className="font-bold text-white ellipsis">{value.description}</p>
    </div>
  );
};

export default CustomCard;
