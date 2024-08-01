import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from 'react-router-dom';


function Button({index}) {
  const [scale, setScale] = useState('scale-100');

  const handleMouseOver = () => {
    setScale('scale-110'); // Use a more common scale value like 110%
  };

  const handleMouseOut = () => {
    setScale('scale-100');
  };
  

  return (
    <Link to={`/sports${index}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      
      className={`w-50 px-4 py-2 hover:bg-green-400 bg-zinc-100 transform ${scale} text-black rounded-full mx-7 flex gap-4 items-center justify-between transition-transform duration-200`}
    >
      <span className='text-sm font-semibold'>
        Show news
      </span>
      <FaArrowRightLong />
    </Link>
  );
}

export default Button;