"use client";

import React, { useState } from 'react';

const Career = () => {
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

  return (
    <div className="container-c">
      <h2 className="title-c">CAREER HIGHLIGHTS</h2>
      <div className="image-grid-c">
        <div
          className={`image-container-c ${isFlipped1 ? 'flipped' : ''}`}
          onMouseEnter={handleFlip1}
          onMouseLeave={handleFlip1}
        >
          <div className="front">
            <img src="/Front.png" alt="Image 1" />
          </div>
          <div className="back back-1">
          <img src="/Noise.png" alt="Image 4" className="overlay-image" />
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
            <img src="/Front (1).png" alt="Image 2" />
          </div>
          <div className="back back-2">
          <img src="/Noise.png" alt="Image 4" className="overlay-image" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#" className="Read-more">Read More</a>
          </div>
        </div>
        <div
          className={`image-container-c ${isFlipped3 ? 'flipped' : ''}`}
          onMouseEnter={handleFlip3}
          onMouseLeave={handleFlip3}
        >
          <div className="front">
            <img src="/Front (2).png" alt="Image 3" />
          </div>
          <div className="back back-3">
          <img src="/Noise.png" alt="Image 4" className="overlay-image" />
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
            <img src="/Front (3).png" alt="Image 4" />
          </div>
          <div className="back back-4">
          <img src="/Noise.png" alt="Image 4" className="overlay-image" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#" className="Read-more">Read More</a>
            
            </div>
        </div>
      </div>
      <div className="vertical-text">AAKASH</div>
    </div>
  );
};

export default Career;