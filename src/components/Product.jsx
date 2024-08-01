import React from 'react';
import Button from './Button';

function Product({ va, desc, Val, mover, count,currentindex,handleClick,d}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
      <div onMouseEnter={() => mover(count)} className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-semibold'>{va}</h1>
        <div className='dets w-1/3 mt-2'>
          <p className='mb-10'>{desc}</p>
          <div className='flex gap-5 items-center justify-between'>
            {Val?.live && <Button index={currentindex} />}
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;