import React from 'react'


const Card = ({image, description , alt}) => {

    return (
      <div className="md:w-[400px] lg:w-[300px] px-2 lg:h-[300px] m-6 p-6">
        <img src={image} alt={alt} />
        <p className="text-white font-light text-center pt-3 text-[13px] h-6">{description}</p>
      </div>
    ); 

  };

export default Card
