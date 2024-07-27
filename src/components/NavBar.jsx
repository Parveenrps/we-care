import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Aboutus from './Aboutus';

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div className='shadow-md ' >

        <div className='max-w-[1100px] mx-auto flex justify-between py-2 items-center' >
        <Link to='/' >
            <h1 className='text-4xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent' >We Care</h1>
        </Link>


        <div className='flex justify-between gap-10'>
            <div className='flex justify-between gap-4 items-center '>
            <Link to='/' >
                <p className=' text-[1rem] font-semibold hover:text-gray-600' >Home</p>
            </Link>

            <Link to='/healthtips' >
                <p className=' text-[1rem] font-semibold hover:text-gray-600' >Health Tips</p>
            </Link>

            {/* <Link to='/doctorai' onClick={ ()=> navigate('/doctorai')} >
                <p className=' text-[1rem] font-semibold hover:text-gray-600' >Doctor AI</p>
            </Link> */}

            <Link to='/healthnews' onClick={ ()=> navigate('/healthnews')} >
                <p className=' text-[1rem] font-semibold hover:text-gray-600' >Health News</p>
            </Link>

            <Link to="/aboutus" >
                <p className=' text-[1rem] font-semibold hover:text-gray-600' >About us</p>
            </Link>
            </div>

            <div className='flex justify-between border rounded-lg '>
                <div>
                <Link to='/login' >
                    <button className='border-r text-xl font-semibold px-2 py-1  hover:bg-gray-100' >Sign In</button>
                </Link>
                </div>

                <div>
                <Link to='/signup' >
                    <button className=' font-semibold text-xl px-2 py-1  hover:bg-gray-100' >Sign Up</button>
                </Link>
                </div>


               

            </div>

        </div>


        </div>
        

      
    </div>
  )
}

export default NavBar
