"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Vidharbha() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div>
      <main>
        {/* Header Section */}
        <div className="h1-container">
          <h1>⎯⎯⎯Know the Journey⎯⎯⎯</h1>
          <h2>VIDARBHA EXPRESS</h2>
        </div>
        
        {/* Paragraph Section */}
        <div className="p-container">
          <p>
            Integer eget fringilla nibh, vitae tincidunt mi. Sed risus ligula, congue eget iaculis eu, maximus et nisl. In
            fringilla mauris in dui feugiat, vitae faucibus neque volutpat. Sed ultricies dui vel nunc euismod 
            posuere. Curabitur consectetur erat eros, sed aliquam tortor vestibulum ac. Proin in sollicitudin libero. Integer 
            lectus risus, accumsan interdum lorem id, ullamcorper dictum massa. Integer id nisi egestas tortor 
            fermentum rhoncus. Ut rutrum rutrum sapien, eget ornare leo congue sed. Duis aliquet id velit ut feugiat.
            Integer fermentum lectus ac tortor maximus, eu pretium lacus tincidunt. Quisque euismod tellus non 
            porttitor mattis. Ut nec condimentum mauris. Suspendisse eu ultrices dui, quis sagittis quam. Curabitur 
            sodales odio augue, eget bibendum nisl sodales eu.
          </p>
        </div>
        {/* Image Section */}
        <div className="img-container">
          <Image
            src="/about us main 1.png" // Replace with your image URL
            alt="Vidarbha Express Image"
            width={599} // Set the width of the image
            height={574} // Set the height of the image
            onLoad={() => setIsImageLoaded(true)} // Set isImageLoaded to true when the image is loaded
          />
          <div className="list-container">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Sed do eiusmod tempor incididunt ut labore et</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Sed do eiusmod tempor incididunt ut labore et</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Sed do eiusmod tempor incididunt ut labore et</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Sed do eiusmod tempor incididunt ut labore et</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Sed do eiusmod tempor incididunt ut labore et</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}