import React from 'react';
import Marue from './Marue';

function Maruess() {
  const images = [
    [
      "formula1.jpg",
      "motogp.png",
      "ATP.png",
      "champions league.png",
      "NFL.png",
      "olympics.png",
      "icc worldcup.jpg",
      "PGA.png",
      "euros.jpg"
    ],
    [
      "formula1.jpg",
      "motogp.png",
      "ATP.png",
      "champions league.png",
      "NFL.png",
      "olympics.png",
      "icc worldcup.jpg",
      "PGA.png",
      "euros.jpg"
    
    ]
  ];

  return (
    <div className="py-10 mt-20 w-full relative overflow-hidden">
      {images.map((item, index) => (
        <Marue key={index} imageurl={item} direction={index===0?"left":"right"} />
      ))}
    </div>
  );
}

export default Maruess;