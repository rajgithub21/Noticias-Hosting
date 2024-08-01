import { motion } from 'framer-motion';
import React from 'react';
import { IoIosReturnRight } from "react-icons/io";
import { TbBackground } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Card({ width, start, para, hover = false ,index}) {
return (
<motion.div 
whileHover={{ 
padding: "25px", 
backgroundImage: `url(https://i.pinimg.com/564x/a1/62/cf/a162cf9a881b040c8884da0c478c72ed.jpg)`, 
backgroundSize: 'cover', 
backgroundPosition: 'center top' // Shift the background image upward
}} 
className={`bg-zinc-800 rounded-xl ${hover ? 'hover:' + hover : ''} p-5 ${width}`}
>
<Link  to={index === 1 ? "/login" : "/signup"}>
<div className="ml-3 w-full" >
<div className='w-full flex items-center justify-between px-4'>
<h3>One Heading</h3>
<IoIosReturnRight />
</div>
<h1 className="text-3xl font-medium mt-10">Login</h1>
        <p className="text-white mt-4">{para}</p>
      </div>
      
      
      <div className="ml-3 down w-full mt-60 mb-5">
        {start && (
          <div>
            <h1 className="text-5xl font-bold tracking-tight">sign up</h1>
            <button className="mt-5 rounded-full py-2 px-3 border-[1px] border-white">
              Contact List
            </button>
          </div>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut repudiandae nulla?</p>
        )}
      </div>
      </Link>
    </motion.div>
  );
}

export default Card;