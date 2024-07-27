import React from 'react'
import { useState, useEffect } from 'react';
import HealthTipsData from './HealthTipsData';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GrNext, GrPrevious } from "react-icons/gr";
import NavBar from '../components/NavBar';

const HealthTips = () => {
  const[index, setIndex] = useState(1);



  return (
    <div>
      <NavBar></NavBar>
    <div className="flex flex-col items-center mx-auto p-4">
      <h1 className="text-5xl text-green-800 font-bold mb-6 mt-12 text-center">Health Tips</h1>

      <div className='flex mt-12 justify-between items-center gap-6 '>

        <div className='bg-green-800 rounded-full p-2 text-center text-white font-bold text-2xl hover:shadow-md'>
        <GrPrevious onClick={ () => index > 0 ? setIndex(index-1) : setIndex(HealthTipsData.length - 1) } ></GrPrevious>
        </div>

        <div className='flex flex-col max-w-[650px] shadow-2xl rounded-lg m-6 p-6 hover:scale-105 transition ease-in duration-500'>
          <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-bold text-green-900'>{HealthTipsData[index].title}</h2>
          <i className={`${HealthTipsData[index].icon} text-6xl mr-8 font-bold text-green-900`}></i>
          </div>

          <div className='mt-6'>
          <p className='text-2xl '>{HealthTipsData[index].paragraph}</p>
          </div>
           
        </div>


        <div className='bg-green-800 rounded-full p-2 text-center text-white font-bold text-2xl hover:shadow-md'>
        <GrNext onClick={ () => index < HealthTipsData.length - 1 ? setIndex(index+1) : setIndex(0) } ></GrNext>
        </div>


      </div>
    </div>
    </div>
  );
}

export default HealthTips
