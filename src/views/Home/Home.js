import React from 'react'
import "./Home.css"
import Navbar from './../../components/Navbar/Navbar'
import HomeImg from "./House.png"
import Footer from './../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>Home</h1>
        <img src={HomeImg} className='header-img'/>

        <Footer/>
        </div>
  )
}

export default Home