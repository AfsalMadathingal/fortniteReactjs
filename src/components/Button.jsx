import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-white w-[300px]  px-4 py-2  flex  justify-center hover:bg-black hover:text-white hover:border-white border cursor-pointer">
      <p>{title}</p>
    </button>
  );
};

export default Button;
