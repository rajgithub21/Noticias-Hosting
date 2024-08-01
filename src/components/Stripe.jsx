import React from 'react'

function Stripe({val,num}) {
  return (
    <div className='mt-10 max-h-[10rem] w-[25%] px-10 py-5  border-t-2 border-b-2 border-r-2 border-zinc-700 flex justify-between items-center '>
        <span className='font-bold text-2xl'>{val.name}</span>
        <span className='font-semibold'>{num}</span>
    </div>
  )
}

export default Stripe