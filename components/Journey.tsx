import React from 'react';
import { Carousel } from "flowbite-react";


const Journey = () => {
  return (
    <div className="container-j">
      <div className="title-j">
        <div className="journey-of-kabaddi">JOURNEY OF KABADDI</div>
        <img src="/reach.png" alt="Matter" className="reach-image" />
        <div className="your">YOUR FULL</div>
      </div>

      <div className="container-main">
        <div className="main-content" style={{ backgroundImage: 'url(/kk.png)' }}>
          <div className="left-side">
            <div className="know">KNOW</div>
            <div className="journey">JOURNEY</div>
            <div className="text">
              IT'S NOT THE END GOAL THAT MATTERS, IT'S LEARNING
              TO FALL IN LOVE WITH AND EMBRACE THE PROCESS,
              ALLOWING THE GOALS TO NEVER STOP EVOLVING AND
              GROWING. AT TEK YOU ARE PART OF A TEAM AND
              NEVER ALONE ON YOUR JOURNEY, LET'S BEGIN
              ACHIEVING TOGETHER.
            </div>
            <div className="learn-more">LEARN MORE</div>
          </div>
          <div className="right-side">
            <div className="image">
              <img src="/journey.png" alt="Kabaddi Players" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;