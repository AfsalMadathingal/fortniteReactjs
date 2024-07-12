import React from "react";

const ContributionSection = () => {
  return (
    <>
      <section className=" flex flex-col text-white justify-center items-center p-2">
     
        <h2 className="text-white text-center pb-5 text-4xl font-extralight">
          Our Contribution
        </h2>
        <div className="max-w-[800px]">

        <p className="text-white text-center font-extralight ">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user  community.
          Collaborating with us represents an investment, rather than a mere
          expenditure. Our dedication to providing distinctive digital
          interactions guarantees unparalleled benefits for our clientele.
        </p>
        </div>
       

        <div className="flex flex-col lg:flex-row  font-extralight mt-12 text-center text-white justify-evenly items-center gap-16"> 
          <div className="p-2 ">
            <h3 className="lg:text-[80px] xs:text-[60px]">5M</h3>
            <p>
              Daily User  <br />
              Engagement
            </p>
          </div>
          <div>
            <h3  className="lg:text-[80px] xs:text-[60px]" >$500K</h3>
            <p>
              Revenue Surge for an <br /> Platform
              <br />
            </p>
          </div>
          <div>
            <h3  className="lg:text-[80px] xs:text-[60px]">10X</h3>
            <p>
              ROAS on all our <br /> marketing campaigns
              <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContributionSection;
