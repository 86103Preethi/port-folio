import React from 'react'

const Contact = () => {
  return (
   <div name="contact" className='w-full h-screen bg-black flex justify-center items-center p-4 text-center'>
         <form action='https://getform.io/f/01030412-91bd-46d3-a903-d840fd5c2075' method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-[#c76acb] text-[#ccd6f6]'>
                Contact
               </p>
               <p className='text-[#6b7280] py-4'>Submit the form below or shoot me an email - @preethis835@gmail.com </p>
            </div>
            <input className='bg-[#e2e8f0] p-2' type="text" placeholder="Name" name='name' />
            <input className='bg-[#e2e8f0] my-4 p-2' type="email" placeholder="Email" name='email' />
            <textarea className='bg-[#e2e8f0] p-2' placeholder="Message" rows="5" name='message' />
            <button className='text-black bg-[#e2e8f0] border-2 hover:bg-[#c76acb] hover:border-[#c76acb] px-4 py-3 my-8 mx-auto flex items-center'>
            Lets Collaborate
            </button>
         </form>
      </div>

  )
}

export default Contact
