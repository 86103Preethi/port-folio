import React from 'react';
import react from '../assets/react.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import svelte from '../assets/svelte.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-black text-[#6b7280] h-screen w-full'>
        <div className='mx-w-[1000px] mx-auto p-4 flex flex-col justify-center sm:w-2/3 w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#c76acb] text-[#ccd6f6] '>Skills</p>
                <p className='py-4'>Technologies and Frameworks I've worked with:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[black] hover:scale-110 duration-500 pb-5'>
                    <img className='w-20 mx-auto' src={html} alt="html icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[black] hover:scale-110 duration-500 pb-5 px-3'>
                    <img className='w-20 mx-auto' src={css} alt="css icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[black] hover:scale-110 duration-500 pb-5'>
                    <img className='w-20 mx-auto' src={js} alt="js icon"/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[black] hover:scale-110 duration-500 pb-5'>
                    <img className='w-20 mx-auto' src={react} alt="react icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[black] hover:scale-110 duration-500 pb-5'>
                    <img className='w-20 mx-auto' src={tailwind} alt="tailwindcss icon"/>
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[black] hover:scale-110 duration-500 pb-5'>
                    <img className='w-20 mx-auto' src={svelte} alt="svelte icon"/>
                    <p className='my-4'>Svelte</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Skills