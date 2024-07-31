"use client";
import React from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';

const Score = () => {
  return (
    <div className="container-s">
      <h1 className="title-s">CARRIER SCORES</h1>
      <Image src="/matter (1).png" alt="Matter" className="matter-image" width={800} height={500} />
      <h2 className="subtitle">FACT</h2>
      <div className="scores">
        <div className="score">
          <h3 className="score-number animate-score">
            <CountUp start={0} end={990} duration={2} separator="," enableScrollSpy />
            +
          </h3>
          <p className="score-label">INSTAGRAM</p>
          <p className="score-detail">TOP</p>
        </div>
        <div className="score">
          <h3 className="score-number animate-score">
            <CountUp start={0} end={990} duration={2} separator="," enableScrollSpy />
            +
          </h3>
          <p className="score-label">WORLD</p>
          <p className="score-detail">SNR</p>
        </div>
        <div className="score">
          <h3 className="score-number animate-score">
            <CountUp start={0} end={990} duration={2} separator="," enableScrollSpy />
            +
          </h3>
          <p className="score-label">EUROPEAN</p>
          <p className="score-detail">SNR</p>
        </div>
        <div className="score">
          <h3 className="score-number animate-score">
            <CountUp start={0} end={990} duration={2} separator="," enableScrollSpy />
            +
          </h3>
          <p className="score-label">BRITISH</p>
          <p className="score-detail">SNR</p>
        </div>
      </div>
    </div>
  );
};

export default Score;