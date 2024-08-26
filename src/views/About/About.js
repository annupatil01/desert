import React from 'react'
import "./About.css"
import Navbar from './../../components/Navbar/Navbar'
import AboutImg from "./About.png"
import Footer from './../../components/footer/Footer'

function About() {
  return (
    <div>
       <Navbar/>
      <h1 className='page-title'>About</h1>
      <img src={AboutImg} className='header-img'/>

      <Footer/>
      </div>
  )
}

export default About