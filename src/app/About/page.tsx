import React from 'react';
import AboutTheJourney from './AboutTheJourney';
import CareerHighlights from './CareerHighlights';
import Fact from './Fact';
import Vidharbha from './Vidharbha';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';


const About = () => {
  return (
    <div>
        <Navbar />

        <br />


        <AboutTheJourney />
        <Vidharbha />
        <Fact />
        <CareerHighlights />
        <Footer/>
    </div>
  );
};

export default About;