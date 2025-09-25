import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    `I've been working with the React and Svelte frameworks in this web development stream for the past two years. 
    I have experience with both client-side and admin website projects. Working on a variety of projects has greatly enhanced my comprehension of React's fundamental idea. 
    I have been able to think and analyse the system and improve my problem-solving abilities thanks to debugging and complicated logic.`,

    `I enjoy building user interfaces because it combines creative UI ideas with logical reasoning and issue solutions. 
    My passion is to solve real-world problems through web design.`
  ];

  const handleSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div name='about' className='bg-black text-[#6b7280] flex items-center min-h-screen overflow-x-hidden px-5'>
      <div className='max-w-[1300px] mx-auto w-full'>

        {/* Header */}
        <div>
          <motion.div
            className='text-center sm:mb-10'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-[#ccd6f6] text-5xl font-bold inline border-b-4 border-[#c76acb]'>About</p>
          </motion.div>
        </div>

        {/* Content */}
        <div className='grid sm:grid-cols-2 gap-3 py-6 items-center'>

          {/* Left side - animate from left */}
          <motion.div
            className='text-center md:text-right text-2xl md:text-4xl font-bold text-[#ccd6f6]'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>Nice to meet you,<br />Please take a look around.</p>
          </motion.div>

          {/* Right side - animate from right */}
          <motion.div
            className='text-md md:text-xl text-[#d1d5db] border-l-4 border-[#c76acb] pl-4'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
          <p className="">{slides[slideIndex]}</p>

            {/* Arrow */}
            <div className='mt-4 flex justify-start' onClick={handleSlide}>
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 25,
                  backgroundColor: '#c76acb',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '6px',
                }}
              />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default About;
 