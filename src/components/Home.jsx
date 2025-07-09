import React, { useState } from 'react';
import pink from '../assets/pink.jpg';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Resume from '../assets/Preethi.pdf';

const Home = () => {
   const [showModal, setShowModal] = useState(false);

  const handleResume = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  

  return (
    <div
      name='home'
      className='grid grid-cols-1 md:grid-cols-2 px-5 w-full min-h-screen bg-black text-[#c76acb] overflow-hidden pt-[80px]'
    >
      {/* Left side content with animation */}
      <motion.div
        className='max-w-[1000px] mx-auto ml-0 lg:ml-44 flex flex-col justify-center h-full'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className='text-xl text-[#c76acb] mb-3'>Hi,</p>
        <h1 className='text-4xl sm:text-4xl font-bold text-[#6b7280]'>
          I'm <span className='text-[#ccd6f6]'>Preethi S</span>
        </h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#6b7280]'>a Front-End Developer</h2>
        <p className='text-xl text-[#c76acb] mt-3'>
          Specialized in building responsive websites with better UI/UX designs. I'm glad that you came here to know about me.
        </p>
        <div className='mt-5'>
          <button onClick={handleResume}
            className='group my-2 px-8 py-3 border-2 flex items-center text-white hover:bg-[#c76acb] hover:border-[#c76acb] rounded-md'>
            My Resume
          </button>
        </div>
      </motion.div>

      {/* Right side avatar with animation */}
      <motion.div
        className='flex justify-center items-center'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          component="img"
          alt='Profile Pic'
          src={pink}
          sx={{     
            width: { xs: 280, sm: 350, md: 380 }, 
            height: { xs: 280, sm: 350, md: 380 }, 
            borderRadius: '50%', objectFit: 'cover' }}
          className='hover:scale-110 transition-transform duration-300 border border-[#c76acb] border-2'
        />
      </motion.div>




      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-white rounded-md p-4 max-w-4xl w-full h-[80%] relative">
            <button
              onClick={handleClose}
              className="absolute top-0 right-1 text-black font-bold text-lg"
            >
              ✕
            </button>
            <iframe
              src={Resume}
              title="Resume PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
