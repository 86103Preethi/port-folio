
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name='about' className='h-screen bg-black text-[#6b7280] flex items-center'>
      <div className='max-w-[1000px] mx-auto w-full'>

        {/* Header */}
        <div className='grid grid-cols-2 gap-8'>
          <motion.div
            className='sm:text-right pb-8 pl-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-[#ccd6f6] text-4xl font-bold inline border-b-4 border-[#c76acb]'>About</p>
          </motion.div>
        </div>

        {/* Content */}
        <div className='grid sm:grid-cols-2 gap-8 px-5 items-center'>

          {/* Left side - animate from left */}
          <motion.div
            className='sm:text-right text-4xl font-bold text-[#ccd6f6]'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>Nice to meet you.<br />Please take a look around.</p>
          </motion.div>

          {/* Right side - animate from right */}
          <motion.div
            className='text-lg text-[#d1d5db] border-l-4 border-[#c76acb] pl-4 py-4'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>I’ve worked in multiple areas of website design for a startup, collaborating with UI/UX designers and backend teams. I have hands-on experience with React.js and Svelte.js. My passion lies in solving real-world problems through web technologies.</p>

            {/* Arrow */}
            <div className='mt-4 flex justify-start'>
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


// import { Button } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import React from 'react';
// import { motion } from 'framer-motion';
 
// const About = () => {
//   return (
//     <div name='about' className='bg-black text-[#6b7280] flex items-center min-h-screen'>
//       <div className='w-full md:max-w-[1000px] mx-auto '>
 
//         {/* Header */}
//         <div className='grid grid-cols-2 gap-8'>
//           <div
//             className='sm:text-right pb-8 pl-4'
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <p className='text-[#ccd6f6] text-4xl font-bold inline border-b-4 border-[#c76acb]'>About</p>
//           </div>
//         </div>
 
//         {/* Content */}
//         <div className='grid sm:grid-cols-2 gap-8 px-5 items-center'>
 
//           {/* Left side - animate from left */}
//           <div
//             className='sm:text-right text-4xl font-bold text-[#ccd6f6]'
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <p>Nice to meet you.<br />Please take a look around.</p>
//           </div>
 
//           {/* Right side - animate from right */}
//           <div
//             className='text-lg text-[#d1d5db] border-l-4 border-[#c76acb] pl-4 py-4'
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <p>I’ve worked in multiple areas of website design for a startup, collaborating with UI/UX designers and backend teams. I have hands-on experience with React.js and Svelte.js. My passion lies in solving real-world problems through web technologies.</p>
 
//             {/* Arrow */}
//             <div className='mt-4 flex justify-start'>
//               <ArrowForwardIosIcon
//                 sx={{
//                   fontSize: 25,
//                   backgroundColor: '#c76acb',
//                   color: 'white',
//                   borderRadius: '50%',
//                   padding: '6px',
//                 }}
//               />
//             </div>
//           </div>
 
//         </div>
 
//       </div>
//     </div>
//   );
// };
 
// export default About;
 