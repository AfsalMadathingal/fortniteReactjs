import React from "react";
import heroImage from "../assets/hero.webp";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <section className="xs:p-3 md:p-2  flex flex-col items-center ">
        <div className="absolute top-4 right-7">
          {" "}
          <i className="fa-solid fa-x text-white"></i>{" "}
        </div>

        <h2 className="text-white text-center p-8 xs:text-[15px]  lg:text-2xl font-extralight max-w-[800px]">
          Epic Games : An American video game and software developer and
          publisher based in Cary, North Carolina.
        </h2>

        <img
          className="lg:w-[70em]"
          loading="lazy"
          src={heroImage}
          alt="hero"
        />

<p className="text-white font-light text-center  xs:text-[12px] leading-loose xs:w-[320px] p-3 md:w-[700px] lg:text-[15px] lg:w-[900px] mt-5">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>

     
        <div className="pt-8">
          <Button title={"Visit Website"} />
        </div>
      </section>
    </>
  );
};

export default Header;
