'use client';

import Image from 'next/image';

function Match() {
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).style.transform = 'scale(1.2)';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).style.transform = 'scale(1)';
  };

  return (
    <div className="image-container-m">
      <Image src="/IMG_0363.png" width={600} height={200} alt="My Image" />
      <div className="absolute-image">
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="image-wrapper">
          <Image src="/Group 48095953.png" width={300} height={100} alt="My Image" />
        </div>
      </div>
    </div>
  );
}

export default Match;