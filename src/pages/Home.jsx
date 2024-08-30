import React, { useState } from 'react'
import img from './doctorai.jpg'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'

const Home = () => {
  const navigate = useNavigate();
  const [loggedIn, stIsLoggedIn] = useState(false);
  return (
    <div >
        <NavBar></NavBar>

        <div className='max-w-[1180px]  bg-white mx-auto border shadow-lg rounded-[52px] flex p-12 mt-20 '>
            <div className='flex flex-col justify-center ml-2  max-w-[60%]'>
                <h1 className='text-5xl font-semibold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent  ' >We Care</h1>

                <p className='text-[1.3rem] text-gray-600 font-semibold mt-4 mb-6 mr-8   ' >Welcome to our We Care website.
                We provide the best online doctor consultation.
                you don’t ned to  go any where just book your
                one on one session with our best Doctors
                </p>

                <div>
                <button
                onClick={()=>navigate('/dashboard')}
                className='text-start border shadow-md  rounded-full p-2 px-4 text-green-700 hover:bg-green-700 hover:text-white font-semibold hover:shadow-lg  ' >Book Your Slot</button>
                </div>


            </div>

            <div>
                <img src={img} className='w-[400px] rounded-[52px] hover:scale-105 transition ease-in duration-300 ' ></img>
            </div>
        </div>

        <Services loggedIn={loggedIn}></Services>

        <Aboutus name="aboutus"></Aboutus>



        <Footer></Footer>
      
    </div>
  )
}

export default Home
