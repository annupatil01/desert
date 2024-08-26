import React from 'react'
import "./Contact.css"
import Navbar from './../../components/Navbar/Navbar'
import ContactImg from "./Contact.png"
import Footer from './../../components/footer/Footer'

function Contact() {
  return (
    <div>
       <Navbar/>
      <h1 className='page-title'>Contact</h1>
      <img src={ContactImg} className='header-img'/>

      <Footer/>
      </div>
  )
}

export default Contact