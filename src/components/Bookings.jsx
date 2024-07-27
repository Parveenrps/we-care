import React from 'react'
import { useSelector } from 'react-redux'

const Bookings = ({doctorId}) => {
  const bookings = useSelector( (state)=>state.bookings );
  console.log("Prinding Booked doctors")
  console.log(bookings)
  
  return (
    <div className='max-w-[900px] mx-auto mt-6 border rounded-t-2xl shadow-gray-600 shadow-2xl rounded-b-2xl overflow-hidden'>
        <div className='flex bg-green-700 text-white  text-xl font-semibold p-2'>
          <p className='min-w-[90px]'>Sr. no</p>
          <p className='min-w-[250px]'>Doctor</p>
          <p className='min-w-[200px]'>Specialty</p>
          <p className='min-w-[250px]'>Timing</p>
          <p className='min-w-[250px]'>Meet Link</p>
        </div>
        
        <div className='max-h-[400px] overflow-y-auto '>
          {bookings.map((doctor, index) => (
            <div className='flex items-center text-xl font-semibold p-2 border-b ' key={doctor.doctorId}>
              <p className='min-w-[90px]'>{index + 1}</p> {/* Use map index to start from 1 */}
              <p className='min-w-[250px]'>{doctor.name}</p>
              <p className='min-w-[200px]'>{doctor.specialty}</p> 
              <p className='min-w-[250px]' >{doctor.timeSlot}</p>
              <button
              className='bg-green-700 hover:bg-green-800 text-xl text-white px-4 py-1 rounded-full'
              >Join</button>
            </div>
          ))}
        </div>


      
    </div>
  )
}

export default Bookings
