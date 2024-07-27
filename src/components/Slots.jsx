import React, { useState } from 'react';
import specialties from './Specialties';
import availableDoctors from './AvailableDoctors';
import { useDispatch, useSelector } from 'react-redux';
import { book } from '../redux/slices/BookSlice';

const Slots = () => {
  const {bookings} = useSelector((state)=>state);
  const dispatch = useDispatch();
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [availableDoctor, setAvailableDoctor] = useState(availableDoctors);

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
  };

  const handleSearch = () => {
    if (selectedSpecialty === 'Please Select...') {
      setAvailableDoctor(availableDoctors);
    } else {
      setAvailableDoctor(
        availableDoctors.filter((doctor) => doctor.specialty === selectedSpecialty)
      );
    }
  };

  function handleBooking (doctor){
    dispatch(book(doctor));
    console.log(bookings)
  }

  return (
    <div>
      <div className='flex justify-center'>
        <div className='border rounded-full shadow-lg mt-16'>
          <select
            name='specialties'
            className='outline-none pl-4 pr-8 rounded-l-full'
            value={selectedSpecialty}
            onChange={handleSpecialtyChange}
          >
            <option className='px-4 py-2 text-xl border-none'>Please Select...</option>
            {specialties.map((specialty, index) => (
              <option name={specialty} value={specialty} key={index}>
                {specialty}
              </option>
            ))}
          </select>
          <button
            className='bg-green-700 text-xl text-white font-semibold rounded-r-full px-4 py-2 text-center'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className='max-w-[900px] mx-auto mt-6 border rounded-t-2xl shadow-gray-600 shadow-2xl rounded-b-2xl overflow-hidden '>
        <div className='flex bg-green-700 text-white  text-xl font-semibold p-2'>
          <p className='min-w-[90px]'>Sr. no</p>
          <p className='min-w-[250px]'>Doctor</p>
          <p className='min-w-[200px]'>Specialty</p>
          <p className='min-w-[250px]'>Available Slot</p>
          <p className=''>Action</p>
        </div>

        <div className='max-h-[400px] overflow-y-auto '>
          {availableDoctor.map((doctor, index) => (
            <div className='flex items-center text-xl font-semibold p-2 border-b ' key={doctor.doctorId}>
              <p className='min-w-[90px]'>{index + 1}</p>
              <p className='min-w-[250px]'>{doctor.name}</p>
              <p className='min-w-[200px]'>{doctor.specialty}</p> 
              <p className='min-w-[250px]' >{doctor.timeSlot}</p>
              <button
                className='bg-green-700 text-xl text-white px-2 py-1 rounded-full'
                onClick={()=>handleBooking(doctor)}
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slots;
