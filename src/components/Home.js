import React from 'react'
import './Home.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import CarouselComponent from './CarouselComponent';
function Home() {
  return (
    <div>
      <Navbar/>
      <Card />
      <Footer />
    </div>
  )
}

export default Home