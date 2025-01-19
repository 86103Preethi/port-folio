import React from 'react';
// import {HiArrowRight} from 'react-icons/hi';
import image from '../assets/portfolio_pic.jpeg.jpg';
import pic from '../assets/yellow.jpg';
import black from '../assets/black.jpg';
import pink from '../assets/pink.jpg';
import Avatar from '@mui/material/Avatar';



const Home = () => {
  return (
      <div name='home' className='grid grid-cols-1 sm:grid-cols-2 w-full h-screen bg-black text-[#c76acb]'>
        {/* container */}
        <div className=' max-w-[1000px] mx-auto ml-44 px-8 flex flex-col justify-center h-full'>
           <p className=' text-xl text-[#c76acb] mb-3'>HI,</p>
           <h1 className='text-4xl sm:text-4xl font-bold text-[#6b7280]'>I'm <span className='text-[#ccd6f6]'>Preethi S</span></h1>
           <h2 className='text-4xl sm:text-4xl font-bold text-[#6b7280]'>a Front-End Developer</h2>
           <p className=' text-xl text-[#c76acb] mt-3'>Specialized in building responsive websites with better UI/UX designs. I'm glad that you came here to know about me.</p>
           <div className='mt-5'>
              <button className='group my-2 px-8 py-3 border-2 flex items-center text-white hover:bg-[#c76acb] hover:border-[#c76acb] rounded-md'>My Resume 
              {/* <span className='group-hover:rotate-90 duration-500'><HiArrowRight className='ml-3'/></span> */}
              </button>
           </div>
        </div>
        {/* image */}
        <div className='text-[#c76acb] flex justify-center items-center'>
          <Avatar alt="Profile Pic" src={pink}  sx={{ width: 380, height: 380 }} className='hover:scale-110'/>
        </div>
      </div>
  )
}

export default Home