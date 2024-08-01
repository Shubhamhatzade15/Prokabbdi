"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Hero = () => {


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
      
    </div>
  );
};

export default Hero;