import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = ({loggedIn}) => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center max-w-[1180px] mx-auto mt-28'>
          <div className='bg-white border w-full text-center font-bold text-green-800 p-2 rounded-full shadow-lg '>
              <h1 className='text-2xl uppercase ' >Services that We provide</h1>
          </div>


          <div className='flex flex-col'>

            <div className='bg-white border shadow-md hover:scale-105 transition ease-out duration-500 rounded-lg max-w-[580px] mx-auto mt-8 mb-8 flex gap-4 flex-col items-center p-4' >
              <h1 className='text-2xl text-green-800 font-bold'>Health Tips</h1>
              <p className='text-gray-800 font-semibold text-center'>Welcome to the Health Tips section of We Care! Here, you'll find a variety of practical advice and expert insights to help you lead a healthier, happier life. Whether you're looking for nutrition guidance, fitness routines, mental wellness strategies, or preventive healthcare tips, we've got you covered. Stay informed and take charge of your well-being with our regularly updated tips and recommendations.</p>
              <button onClick={ ()=> navigate('/healthtips')}  className='text-white bg-green-700 hover:bg-green-800 font-semibold px-4 py-2 rounded-full'>Go to Health Tips</button>
            </div>

            <div className='bg-white border shadow-md hover:scale-105 transition ease-out duration-500 rounded-lg max-w-[580px] mx-auto mt-8 mb-8 flex gap-4 flex-col items-center p-4' >
              <h1 className='text-2xl text-green-800 font-bold'>Health News</h1>
              <p className='text-gray-800 font-semibold text-center'>Stay informed with the latest updates in the medical world through our Health News section at We Care. Our team curates top health news stories from reliable sources, keeping you updated on breakthroughs, health policies, and expert insights. Whether it’s advancements in medical technology, new treatments, or health tips, our Health News section ensures you’re always in the know. Trust us to bring you accurate and timely information to help you make informed health decisions. Stay healthy, stay informed.</p>
              <button onClick={ ()=> navigate('/healthnews')}  className='text-white bg-green-700 hover:bg-green-800 font-semibold px-4 py-2 rounded-full'>Go to Health Tips</button>
            </div>

            {/* <div className='bg-white border shadow-md hover:scale-105 transition ease-out duration-500 rounded-lg max-w-[580px] mx-auto mt-8 mb-8 flex gap-4 flex-col items-center p-4' >
              <h1  className='text-2xl text-green-800 font-bold'>Doctor AI</h1>
              <p className='text-gray-800 font-semibold text-center'>Introducing Doctor AI, your virtual health assistant at We Care. Describe your symptoms or health concerns, and our advanced AI will provide you with tailored suggestions and potential solutions. Designed to assist with a wide range of medical issues, Doctor AI offers reliable advice based on the latest medical knowledge. Please note that while Doctor AI provides helpful insights, it is not a substitute for professional medical consultation. For accurate diagnosis and treatment, always consult a healthcare provider.</p>
              <button onClick={ ()=> navigate('/doctorai')} className='text-white bg-green-900 hover:bg-green-950 font-semibold px-4 py-2 rounded-full'>Visit Doctor AI</button>
            </div> */}

            <div className='bg-white border shadow-md hover:scale-105 transition ease-out duration-500 rounded-lg max-w-[580px] mx-auto mt-8 mb-8 flex gap-4 flex-col items-center p-4' >
              <h1  className='text-2xl text-green-800 font-bold'>Virtual Doctor</h1>
              <p className='text-gray-800 font-semibold text-center'>Connect with our top healthcare professionals from the comfort of your home through our Virtual Doctor service at We Care. Book a convenient time slot and have a secure, face-to-face consultation with our best doctors. Whether you need a routine check-up, a specialist opinion, or follow-up care, our Virtual Doctor service ensures you receive personalized, high-quality medical attention without the need for travel. Schedule your virtual appointment today and experience healthcare redefined.</p>
              <button onClick={ loggedIn ? ( ()=> navigate('/dashboard') ) : ( ()=> navigate('/login') )  } className='text-white bg-green-900 hover:bg-green-950 font-semibold px-4 py-2 rounded-full' >Book Your Slot</button>
            </div>
          </div>
        </div>
  )
}

export default Services
