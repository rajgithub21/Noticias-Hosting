import React from 'react'
import Stripe from './Stripe'

function Stripes() {
  const data = [
    { "name": "MOTOGP", number: 11 },
    { "name": "FORMULA 1", number: 20 },
    { "name": "FOOTBALL", number: 3 },
    { "name": "CRICKET", number: 48 }
  ];
         
  return (
    <div className='translate-y-[4rem] flex items-center justify-between'>
        {data.map((item,index)=>(
             <Stripe key={index} val={item} num={item.number}/> 

      ))}
       

        

    </div>
  )
}

export default Stripes