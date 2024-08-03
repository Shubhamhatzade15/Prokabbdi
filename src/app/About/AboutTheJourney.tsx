import React from 'react';
import Image from 'next/image';


const AboutTheJourney = () => {
  return (
    <div className="about-the-journey-container-aa">
      <div className="image-wrapper-aa">
        <div className="image-container-aa">
          <Image
            src="/kk.png"
            alt="About The Journey"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="header-aa">
        <Image src="/About (1).png" alt="Matter" className="about-image" width={580} height={200} />
          <h2>THE</h2> 
          <h1>JOURNEY</h1>
        </div>
        <div className="image-container2-aa">
          <Image
            src="/Ahero.png"
            alt="Additional"
            width={603}
            height={734.7}
          />
          <div className="triangle-a"></div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutTheJourney;
