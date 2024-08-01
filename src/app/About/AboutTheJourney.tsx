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
          <h1>ABOUT</h1>
          <h2>THE <br/> JOURNEY</h2>
        </div>
        <div className="image-container2-aa">
          <Image
            src="/Ahero.png"
            alt="Additional"
            width={603}
            height={734.7}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTheJourney;
