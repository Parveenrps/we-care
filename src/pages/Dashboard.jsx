import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slots from '../components/Slots';
import Bookings from '../components/Bookings';

const Dashboard = () => {
  const appointments = useSelector((state) => state.bookings);
  const user = useSelector((state) => state.user);

  const [clicked, setClicked] = useState('dashboard');

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/dashboard');
    setClicked('dashboard');
  };

  return (
    <div className='flex'>
      <div className='min-w-[300px] h-screen bg-green-700'>
        <div className='border-green-950 border-b-2 flex p-4 shadow-lg'>
          <div className='flex justify-center items-center text-[4.5rem] text-white'>
            <FaUser className='rounded-full' />
          </div>
          <div className='flex flex-col pl-4 justify-center py-2'>
            <div>
              <h1 className='text-4xl text-white'>Parveen</h1>
            </div>
            <div className='flex justify-between text-white'>
              <p>Male</p>
              <p>Age: 28</p>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => setClicked('dashboard')}
            className={`flex border-green-950 border-b-2 hover:bg-green-900 ${clicked === 'dashboard' ? 'bg-green-900' : 'bg-none'}`}
          >
            <div className={`${clicked === 'dashboard' ? 'bg-green-950 w-[8px] mr-1' : ''}`} />
            <a className='text-xl pt-2 pb-2 text-white font-semibold'>Appointments</a>
          </div>

          <div
            onClick={() => setClicked('book')}
            className={`flex border-green-950 border-b-2 hover:bg-green-900 ${clicked === 'book' ? 'bg-green-900' : 'bg-none'}`}
          >
            <div className={`${clicked === 'book' ? 'bg-green-950 w-[8px] mr-1' : ''}`} />
            <a className='text-xl pt-2 pb-2 text-white font-semibold'>Book Your Slot</a>
          </div>

          <div
            onClick={() => setClicked('signout')}
            className={`flex border-green-950 border-b-2 hover:bg-green-900 ${clicked === 'signout' ? 'bg-green-900' : 'bg-none'}`}
          >
            <div className={`${clicked === 'signout' ? 'bg-green-950 w-[8px] mr-1' : ''}`} />
            <a className='text-xl pt-2 pb-2 text-white font-semibold'>Sign out</a>
          </div>
        </div>
      </div>

      <div className='w-full'>
        {clicked === 'dashboard' && (
          <div>
            <div className='pl-4 shadow-lg w-full'>
              <p className='text-green-900 font-semibold text-4xl pt-2 pb-2'>Appointments</p>
            </div>
            <div className='flex h-[500px] justify-center items-center'>
              {appointments.length > 0 ? <Bookings /> : <div className='text-xl font-semibold'>No Appointments</div>}
            </div>
          </div>
        )}

        {clicked === 'book' && (
          <div>
            <div className='pl-4 shadow-lg w-full'>
              <p className='text-green-900 font-semibold text-4xl pt-2 pb-2'>Book Your Slot</p>
            </div>
            <div>
              <Slots  />
            </div>
          </div>
        )}

        {clicked === 'signout' && (
          <div>
            <div className='pl-4 shadow-lg w-full'>
              <p className='text-green-900 font-semibold text-4xl pt-2 pb-2'>Sign out</p>
            </div>
            <div className='border shadow-lg pt-8 pb-8 rounded-lg flex flex-col justify-center items-center max-w-[300px] gap-4 mx-auto mt-24'>
              <h1 className='text-xl text-green-900 font-semibold'>Do you want to Sign out</h1>
              <div className='flex gap-4'>
                <button
                  className='text-start border shadow-md rounded-full p-2 px-8 text-green-700 hover:bg-green-700 hover:text-white font-semibold hover:shadow-lg'
                  onClick={() => navigate('/')}
                >
                  Yes
                </button>
                <button
                  className='text-start border shadow-md rounded-full p-2 px-8 text-green-700 hover:bg-green-700 hover:text-white font-semibold hover:shadow-lg'
                  onClick={clickHandler}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;





// import React, { useState } from 'react'
// import { FaUser } from "react-icons/fa";
// import {userimg} from './userimg.png'
// import { useNavigate } from 'react-router-dom';
// import Slots from '../components/Slots';
// import Bookings from '../components/Bookings';
// import { useSelector } from 'react-redux';

// const Dashboard = () => {
//   const appointments = useSelector( (state)=>state.bookings )

//   // console.log(app)
//   const [clicked, setClicked] = useState('dashboard');

//   const [bookings, setBookings] = useState(true);

//   const navigate = useNavigate();

//   function clickHandler(){
//     navigate('/dashboard');
//     setClicked('dashboard');

//   }
//   return (
//     <div className='flex'>

//       <div className='min-w-[300px] h-screen bg-green-700'>
//         <div className='border-green-950 border-b-2 flex p-4 shadow-lg'>
//           <div className='flex justify-center  items-center text-[4.5rem] text-white '>
//             {<FaUser className='rounded-full' ></FaUser>}
//           </div>
//           <div className='flex flex-col pl-4 justify-center py-2'>

//             <div>
//             <h1 className='text-4xl text-white'>Your Name</h1>
//             </div>

//             <div className='flex justify-between text-white'>
//             <p>Male</p>
//             <p>Age:32</p>
//             </div>

//           </div>
//         </div>
//         <div>
//           <div onClick={ () => setClicked('dashboard')} className={`flex border-green-950 border-b-2 hover:bg-green-900 ${ clicked === 'dashboard' ? 'bg-green-900' : 'bg-none'}`}>
//             <div className={`${clicked === 'dashboard' ? 'bg-green-950 w-[8px] mr-1' : '' } `}></div>
//             <a  className='text-xl pt-2 pb-2 text-white font-semibold '>Appointments</a>
//           </div>

//           <div onClick={ () => setClicked('book')} className={`flex border-green-950 border-b-2 hover:bg-green-900 ${ clicked === 'book' ? 'bg-green-900' : 'bg-none'}`}>
//             <div className={`${clicked === 'book' ? 'bg-green-950 w-[8px] mr-1' : '' } `}></div>
//             <a  className='text-xl pt-2 pb-2 text-white font-semibold '>Book Your Slot</a>
//           </div>

//           <div onClick={ () => setClicked('signout')} className={`flex border-green-950 border-b-2 hover:bg-green-900 ${ clicked === 'signout' ? 'bg-green-900' : 'bg-none'}`}>
//             <div className={`${clicked === 'signout' ? 'bg-green-950 w-[8px] mr-1' : '' } `}></div>
//             <a  className='text-xl pt-2 pb-2 text-white font-semibold '>Sign out</a>
//           </div>
          
//         </div>
//       </div>

//       <div className='w-full'>
//         {
//           clicked === 'dashboard' && 
//           <div>
//             <div className='pl-4  shadow-lg w-full'>
//             <p className='text-green-900 font-semibold text-4xl pt-2 pb-2'>Appointments</p>
//             </div>

//             <div className='flex h-[500px] justify-center items-center'>
//               {
//                 appointments.length > 0 ?  <Bookings/>: <div>No Appointments</div>    
//               }
          
//             </div>
//           </div>
         
//         }

//         {
//           clicked === 'book' && 
//           <div>
//             <div className='pl-4  shadow-lg w-full'>
//             <p className='text-green-900 font-semibold text-4xl pt-2 pb-2'>Book Your Slot</p>
//             </div>

//             <div>
//               <Slots setBookings={setBookings}></Slots>
//             </div>
//           </div>
//         }

//         {
//           clicked === 'signout' && 
//           <div>
//             <div className='pl-4  shadow-lg w-full'>
//             <p className='text-green-900 font-semibold text-4xl pt-2 pb-2'>Sign out</p>
//             </div>
            
//             <div className='border shadow-lg pt-8 pb-8 rounded-lg flex flex-col justify-center items-center max-w-[300px] gap-4 mx-auto mt-24'>
//               <h1 className='text-xl text-green-900 font-semibold'>Do you want to Sign out</h1>
//               <div className='flex gap-4'>

//                 <button
//                 className='text-start border shadow-md  rounded-full p-2 px-8 text-green-700 hover:bg-green-700 hover:text-white font-semibold hover:shadow-lg  '
//                 onClick={ ()=> navigate('/')}>Yes
//                 </button>

//                 <button className='text-start border shadow-md  rounded-full p-2 px-8 text-green-700 hover:bg-green-700 hover:text-white font-semibold hover:shadow-lg  '
//                 onClick={ clickHandler }>No
//                 </button>
//               </div>
//             </div>

//           </div>
//         }
//       </div>

      
//     </div>
//   )
// }

// export default Dashboard
