import React from 'react'
import "./Home.css"
import Navbar from './../../components/Navbar/Navbar'
import HomeImg from "./House.png"
import Footer from './../../components/footer/Footer'
import toast,{ Toaster } from 'react-hot-toast'

function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>Home</h1>
        <img src={HomeImg} className='header-img'/>

        <button type='button' className='button' onClick={()=>{
           toast.loading("Loading this page!")
        }}>
          Load
        </button>&nbsp;&nbsp;

        <button type='button'  className='button' onClick={()=>{
            toast.dismiss()
            toast.success("loaded successfully")
        }}>
             Finish
        </button>&nbsp;&nbsp;

        <button type='button'  className='button' onClick={()=>{
            toast.dismiss()
            toast.error("Someting wents wrong")
        }}>
             Fail
        </button>

        <Footer/>
        <Toaster />
        </div>
  )
}

export default Home