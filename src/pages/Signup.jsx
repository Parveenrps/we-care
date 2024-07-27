import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(setUser({ name, email, gender: 'Male', age: 24 }));
    navigate('/dashboard');
  };

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='flex flex-col w-[380px] border shadow-lg rounded-lg'>
        <h1 className='text-center text-3xl font-bold text-green-900 mt-4 mb-4'>Welcome!</h1>
        <div className='flex flex-col gap-4 mt-8 ml-4 mr-4 mb-8'>
          <div className='flex flex-col'>
            <label className='text-green-950 font-semibold'>Full Name:</label>
            <input
              type='text'
              placeholder='abcd'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='border rounded-lg pl-2 py-1 w-full'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-green-950 font-semibold'>Email:</label>
            <input
              type='email'
              placeholder='abc@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border rounded-lg pl-2 py-1 w-full'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-green-950 font-semibold'>Create Password:</label>
            <input
              type='password'
              placeholder='abc@#1'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='border rounded-lg pl-2 py-1'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-green-950 font-semibold'>Confirm Password:</label>
            <input
              type='password'
              placeholder='abc@#1'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className='border rounded-lg pl-2 py-1'
            />
          </div>
        </div>

        <div className='flex justify-center'>
          <button onClick={handleSignup} className='text-start mt-4 mb-4 border shadow-md rounded-full p-2 px-4 text-green-900 hover:bg-green-900 hover:text-white font-semibold hover:shadow-lg'>
            Sign up
          </button>
        </div>

        <div className='bg-green-950 h-[1px] m-2'></div>

        <div className='flex justify-center items-center gap-2 mt-4 mb-4'>
          <p className='font-semibold'>Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className='text-green-900 font-bold'
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;



// import React from 'react'
// import { FaGoogle } from "react-icons/fa";
// import { Navigate, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
//   return (
//     <div className='flex justify-center items-center h-[100vh] '>

//       <div className='flex flex-col w-[380px] border shadow-lg rounded-lg '>
//         <h1 className='text-center text-3xl font-bold text-green-900 mt-4 mb-4'>Welcome!</h1>

//         <div className='flex flex-col gap-4 mt-8 ml-4 mr-4 mb-8 '>

//           <div className='flex flex-col'>
//           <lable className=' text-green-950 font-semibold' >Full Name:</lable>
//           <input
//           type='text' 
//           placeholder='abcd' required
//           className='border rounded-lg pl-2 py-1 w-full'></input>
//           </div>


//           <div className='flex flex-col'>
//           <lable className=' text-green-950 font-semibold' >Email:</lable>
//           <input
//           type='email' 
//           placeholder='abc@gmail.com' required
//           className='border rounded-lg pl-2 py-1 w-full'></input>
//           </div>

//           <div className='flex flex-col'>
//           <lable className=' text-green-950 font-semibold' >Create Password:</lable>
//           <input
//           type='password' 
//           placeholder='abc@#1' required
//           className='border rounded-lg pl-2 py-1'></input>
//           </div>

//           <div className='flex flex-col'>
//           <lable className=' text-green-950 font-semibold' >Confirm Password:</lable>
//           <input
//           type='password' 
//           placeholder='abc@#1' required
//           className='border rounded-lg pl-2 py-1'></input>
//           </div>

//         </div>

//         <div className='flex justify-center'>
//         <button onClick={ () => navigate('/dashboard')}  className='text-start mt-4 mb-4 border shadow-md  rounded-full p-2 px-4 text-green-900 hover:bg-green-900 hover:text-white font-semibold hover:shadow-lg  '>
//         Sign up
//         </button>

//         </div>

//         <div className='bg-green-950 h-[1px] m-2'></div>

//         <div className='flex justify-center items-center gap-2 mt-4 mb-4'>

//         <p className='font-semibold'>Already have an account?</p>
//         <button
//         onClick={ ()=>navigate('/login')}
//         className=' text-green-900  font-bold '>
//          Sign in
//         </button>

//         </div>

        

        

        
//       </div>
      
//     </div>
//   )
// }

// export default Signup
