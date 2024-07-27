import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-green-950 pt-12 pb-6">
      <div className="flex flex-col max-w-[1300px] mx-auto">
        <div className="flex flex-row  justify-between ">
          <div className="">
            <h2 className="text-5xl font-bold mb-4">We Care</h2>
            <p className='font-bold mb-4'>Connecting you with the best doctors and the latest health news and tips.</p>
          </div>
          <div className="grid grid-cols-2 font-semibold ">
            <Link to="/" className="hover:text-gray-400 scroll-m-3 ">Home</Link>
            <Link to="/aboutus" className="hover:text-gray-400">About Us</Link>
            <Link to="/healthtips" className="hover:text-gray-400">Health Tips</Link>
            <Link to="/healthnews" className="hover:text-gray-400">Health News</Link>
          </div>
        </div>

        <div className='bg-green-950 h-[1.5px]  '></div>
        <div className="text-center mt-2">
          <p>&copy; 2024 We Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
