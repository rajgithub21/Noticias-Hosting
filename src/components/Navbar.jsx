import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='flex max-w-screen-xl bg-black  py-6 mx-auto text-white items-center justify-between border-b-2 border-zinc-700'>
        <div className='nleft flex items-center'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"></img>
        <div className='links flex gap-14 ml-40 items-center'>
            <a href="" className="text-sm flex items-center gap-1">
            <span style={{boxShadow:"0 0 0.45em #00F19"}} className="inline-block w-1 h-1 rounded-full bg-green-400"></span>
            Home
        
            </a>
            <a href="">Work</a>
            <a href="">Culture</a>
            </div>
            
        </div>
        <div className='bg-violet-700 h-10 w-fit p-2 rounded-lg'>
          #No. 1 News App in the market
        </div>
    </div>
  )
}

export default Navbar