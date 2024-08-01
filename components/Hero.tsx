"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Hero = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  const handleFlip4 = () => {
    setIsFlipped4(!isFlipped4);
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).style.transform = 'scale(1.2)';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).style.transform = 'scale(1)';
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
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
      <div className="container">
        <div className="content">
          <h3>Introduction</h3>
          <h1>VIDARBHA EXPRESS</h1>
          <p>Integer eget fringilla nibh, vitae tincidunt mi. Sed risus ligula, congue eget iaculis eu, maximus et nisl. In fringilla mauris in dui feugiat, vitae faucibus neque volutpat. Sed ultricies dui vel nunc euismod posuere. Curabitur consectetur erat eros, sed aliquam tortor vestibulum ac. Proin in sollicitudin libero. Integer lectus risus, accumsan interdum lorem id, ullamcorper dictum massa. Integer id nisi egestas tortor fermentum rhoncus. Ut rutrum rutrum sapien, eget ornare leo congue sed. Duis aliquet id velit ut feugiat. Integer fermentum lectus ac tortor maximus, eu pretium lacus tincidunt. Quisque euismod tellus non porttitor mattis. Ut nec condimentum mauris. Suspendisse eu ultrices dui, quis sagittis quam. Curabitur sodales odio augue, eget bibendum nisl sodales eu.</p>
          <a href="#" className="know-more">KNOW MORE-- </a>
        </div>
        <div className="image-container">
          <Image src="/Group 48095944.png" alt="Team Photo" width={400} height={300} />
        </div>
      </div>
      <div className="container-c">
        <h2 className="title-c">CAREER HIGHLIGHTS</h2>
        <div className="image-grid-c">
          <div
            className={`image-container-c ${isFlipped1 ? 'flipped' : ''}`}
            onMouseEnter={handleFlip1}
            onMouseLeave={handleFlip1}
          >
            <div className="front">
              <Image src="/Front.png" width={600} height={200} alt="Image 1" />
            </div>
            <div className="back back-1">
              <Image src="/Noise.png" alt="Image 4" className="overlay-image" width={400} height={200} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="Read-more">Read More</a>
            </div>
          </div>
          <div
            className={`image-container-c ${isFlipped2 ? 'flipped' : ''}`}
            onMouseEnter={handleFlip2}
            onMouseLeave={handleFlip2}
          >
            <div className="front">
              <Image src="/Front (1).png" alt="Image 2" width={600} height={200} />
            </div>
            <div className="back back-2">
              <Image src="/Noise.png" alt="Image 4" className="overlay-image" width={400} height={200} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="Read-more">Read More</a>
            </div>
          </div>
          <div
            className={`image-container-c ${isFlipped3 ? 'flipped' : ''}`}
            onMouseEnter={handleFlip3}
            onMouseLeave={handleFlip3}
          >
            <div className="front">
              <Image src="/Front (2).png" alt="Image 2" width={600} height={200} />
            </div>
            <div className="back back-3">
              <Image src="/Noise.png" alt="Image 4" className="overlay-image" width={400} height={200} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="Read-more">Read More</a>
            </div>
          </div>
          <div
            className={`image-container-c ${isFlipped4 ? 'flipped' : ''}`}
            onMouseEnter={handleFlip4}
            onMouseLeave={handleFlip4}
          >
            <div className="front">
              <Image src="/Front (3).png" alt="Image 3" width={600} height={200} />
            </div>
            <div className="back back-4">
              <Image src="/Noise.png" alt="Image 4" className="overlay-image" width={400} height={200} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="Read-more">Read More</a>
            </div>
          </div>
        </div>
        <Image className="vertical-text-a" src="/akash (1).png" alt="AAKASH" width={600} height={200} />
        <Image className="vertical-text-p" src="/pikalmunde.png" alt="AAKASH" width={600} height={200} />
      </div>
      <div className="match-container">
      <Match />
    </div>
    </div>
  );
};

const Match = () => {
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
};

export default Hero;