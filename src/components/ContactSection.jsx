import React from "react";
import Button from "./Button";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center mt-44 p-5  ">
      <h2 className="lg:text-4xl xs:text-xl text-center text-white font-light pb-9">
        Interested in delving deeper into the project?
      </h2>
      <p className="text-white text-center font-extralight text-lg lg:w-[600px] ">
        If you'd like to explore further details about our initiatives or any of
        our 
        affiliated brands, don't hesitate to connect. You can reach out to us
        via 
        email at hello@abc.com or give us a call at +91 480 20802730.
      </p>
      <div className="flex flex-col lg:flex-row  gap-8 items-center mt-12 font-light">
        <button className="bg-black border-white border last: text-white w-[300px]  px-4 py-2  flex  justify-center hover:bg-white hover:text-black cursor-pointer">
          <p>Ring us on Skype</p>
        </button>
        <Button title={"Contact Us"}/>
      </div>
    </section>
  ); 
};

export default ContactSection;
