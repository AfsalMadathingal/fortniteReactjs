import React from "react";
import heroImage from "../assets/hero.webp";
import Button from "./Button";

const Header = () => {
  return (
    <>
     
      <section className="xs:p-3 md:p-2  flex flex-col items-center ">
        <div className="absolute top-4 right-7">  <i className="fa-solid fa-x text-white" ></i> </div>
      
        <h2 className="text-white text-center p-8 xs:text-[14px] lg:text-2xl font-extralight max-w-[800px]">
          Epic Games : An American video game and software developer  and
          publisher based in Cary, North Carolina.
        </h2>
   
          <img className="lg:w-[70em]" loading="lazy"  src={heroImage} alt="hero" />
 

        <div className="pt-8">
          <Button title={"Visit Website"}/>
        </div>
      </section> 
    </>
  );
};

export default Header;
