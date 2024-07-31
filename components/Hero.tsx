import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="left">
        <h1>
         WE ARE<br />
         STRONGER<br />
         TOGETHER
        </h1>

        
      </div>

      <div className="right">
        <Image src="/image 2.png" alt="image" width={800} height={500} />
      </div>

      <div className="triangle"></div>
    </div>

  );
};

export default Hero; 