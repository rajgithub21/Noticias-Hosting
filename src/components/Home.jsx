import React from 'react'
import Navbar from './Navbar'
import Work from './Work'
import Stripes from './Stripes'
import Products from './Products'
import Maruess from './Maruess'
import Cards from './Cards'
import Footer from './Footer'

function Home() {
  return (
    <div className='w-screen h-full bg-black text-white'>
      

    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
    <Maruess/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default Home