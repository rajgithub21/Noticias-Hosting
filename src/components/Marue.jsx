import { motion } from 'framer-motion';
import React from 'react';

function Marue({ imageurl,direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction==='left'?"0":"-100%" }}
        animate={{ x: direction ==="left"?"-100%":"0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className='flex flex-shrink-0 py-8  gap-40 pr-40 whitespace-nowrap overflow-hidden'
      >
        {imageurl.map((i, index) => (
          <img key={index} src={i} className='w-51 flex-shrink-0' alt={`image-${index}`} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction==='left'?"0":"-100%" }}
        animate={{ x: direction ==="left"?"-100%":"0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className='flex flex-shrink-0 py-8 gap-40 pr-40 whitespace-nowrap overflow-hidden'
      >
        {imageurl.map((i, index) => (
          <img key={index} src={i} className='w-51 flex-shrink-0' alt={`image-${index}`} />
        ))}
      </motion.div>

  
    </div>
  );
}

export default Marue;