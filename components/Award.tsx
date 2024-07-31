import React from 'react';
import Image from 'next/image';
const Awards = () => {
  return (
    <div className="awards-container">
      <div className="awards-text">
        <span className="Award-a">AWARDS  ------</span>
        <img src="/reach.png" alt="Matter" className="reach-image-a" />
        <span className="your-full">YOUR FULL</span>
      </div>
      <div className="awards-image">
      <Image src="/Award mixed pic 1.png" width={600} height={200} alt="My Image" />
      </div>
    </div>
  );
};

export default Awards;
