import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-[#6b7280]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
         <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-[#ccd6f6] text-4xl font-bold inline border-b-4 border-[#c76acb]'>About</p>
          </div>
         </div>
         <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Nice to meet you. Please take a look around.</p>
          </div>
          <div>
          I have worked in several areas of website design for a startup firm for more than a year and a half, collaborating with both the graphic design and backend teams.
           For a smooth experience, I have worked with Redux, many React.js frameworks, and Svelte.js. "My passion has always been doing hustle work in web technologies."
            <ArrowForwardIosIcon sx={{ fontSize: 15,backgroundColor: '#c76acb', color: 'white', borderRadius: '50%',marginLeft: '1.25rem', padding: '2px', }}  />   
          </div>

         </div>
        </div>
    </div>
  )
}

export default About