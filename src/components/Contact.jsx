import React from 'react'

const Contact = () => {
  return (
   <div name="contact" className='bg-black flex justify-center items-center text-center px-5'>
         <form action='https://getform.io/f/01030412-91bd-46d3-a903-d840fd5c2075' method="POST" className='flex flex-col w-full md:max-w-[600px]'>
            <div className=' mx-auto'>
               <p className='text-4xl font-bold inline border-b-4 border-[#c76acb] text-[#ccd6f6]'>
                Contact
               </p>
               <p className='text-[#d1d5db] py-6'>Submit the form below or shoot me an email - @preethis835@gmail.com </p>
            </div>
            <input className='bg-[#e2e8f0] p-2' type="text" placeholder="Name" name='name' />
            <input className='bg-[#e2e8f0] my-4 p-2' type="email" placeholder="Email" name='email' />
            <textarea className='bg-[#e2e8f0] p-2' placeholder="Message" rows="5" name='message' />
            <button className='group my-2 mx-auto px-8 py-3 border-2 flex items-center text-black bg-[#e2e8f0] hover:bg-[#c76acb] hover:border-[#c76acb] relative overflow-hidden' >
               <span className="relative z-10">Lets Collaborate</span>
               <span className="absolute inset-0 bg-[linear-gradient(90deg,#c76acb,#ccd6f6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

         </form>
      </div>

  )
}

export default Contact
