import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center h-[100vh] '>

      <div className='flex flex-col w-[380px] border shadow-lg rounded-lg '>
        <h1 className='text-center text-3xl font-bold text-green-900 mt-4 mb-4'>Welcome!</h1>

        <div className='flex flex-col gap-4 mt-8 ml-4 mr-4 mb-8 '>

          <div className='flex flex-col'>
          <lable className=' text-green-950 font-semibold' >Email:</lable>
          <input
          type='email' 
          placeholder='abc@gmail.com' required
          className='border rounded-lg pl-2 py-1 w-full'></input>
          </div>

          <div className='flex flex-col'>
          <lable className=' text-green-950 font-semibold' >Password:</lable>
          <input
          type='password' 
          placeholder='abc@#1' required
          className='border rounded-lg pl-2 py-1'></input>
          </div>

        </div>

        <div className='flex justify-center'>
        <button onClick={ ()=>navigate('/dashboard')} className='text-start mt-4 mb-4 border shadow-md  rounded-full p-2 px-4 text-green-900 hover:bg-green-900 hover:text-white font-semibold hover:shadow-lg  '>
        Sign in</button>

        

        </div>

        <div className='bg-green-950 h-[1px] m-2'></div>

        <div className='flex justify-center items-center gap-2 mt-4 mb-4'>

        <p className='font-semibold'>Don't have an account?</p>
        <button
        onClick={ ()=>navigate('/signup')}
        className=' text-green-900  font-bold '>
         Sign up
        </button>

        </div>

        

        
      </div>
      
    </div>
  )
}

export default Login
