import React from 'react'
import './Home.css'
import Navbar from './Navbar';
import Footer from './Footer';
import CarouselComponent from './CarouselComponent';
function Home() {
  return (
    <div>
      <Navbar/>
      <CarouselComponent />
      <Footer />
    </div>
  )
}

export default Home