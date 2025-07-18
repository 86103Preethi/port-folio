import React, { useState } from 'react';
import pink from '../assets/black.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Resume from '../assets/Preethi.pdf';
import CloseIcon from '@mui/icons-material/Close';
 
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const containerRef = React.useRef(null);
  
  // Set up scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Create parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
 
  const handleResume = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
 
  return (
    <div ref={containerRef}name='home' className='relative grid grid-cols-1 md:grid-cols-2 px-5 min-h-screen overflow-hidden bg-black text-[#c76acb] pt-[80px]'>
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c76acb]/10 via-black/90 to-black" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
          style={{
            backgroundImage: 'linear-gradient(to right, #c76acb/20 1px, transparent 1px), linear-gradient(to bottom, #c76acb/20 1px, transparent 1px)'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#c76acb]"
            style={{
              width: `${Math.random() * 5 + 8}px`,
              height: `${Math.random() * 5 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.3
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              transition: {
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        ))}
      </div>
 
      {/* Left content */}
      <motion.div
        className='mx-auto lg:ml-44 flex flex-col justify-center h-full z-10'
        style={{ y: yText}}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{x: 0 , opacity: 1}}
        transition={{ duration: 0.8 }}
      >
        <p className='text-xl md:text-4xl text-[#c76acb] mb-3'>Hi, this is</p>
        <h1 className='text-3xl md:text-6xl font-bold text-[#6b7280]'>
          <span className='text-[#ccd6f6]'>Preethi S,</span>
        </h1>
        <h2 className='text-3xl md:text-6xl font-bold text-[#6b7280]'>Front-End Developer</h2>
        <p className='text-lg md:text-2xl text-[#c76acb] mt-3'>
          Specialized in building responsive websites with clean UI/UX designs. I'm glad that you came here to know about me.
        </p>
        <div className='mt-2 md:mt-5'>
          <button
            onClick={handleResume}
            className='group my-2 px-4 md:px-8 py-1 md:py-3 border-2 flex items-center text-black bg-white hover:bg-[#c76acb] hover:border-[#c76acb] rounded-md relative overflow-hidden'
          >
            <span className="relative z-10 text-sm md:text-xl">My Resume</span>
            <span className="absolute inset-0 bg-[linear-gradient(90deg,#c76acb,#ccd6f6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </motion.div>
 
      {/* Right side avatar */}
      <motion.div
        className='flex justify-center items-center z-10'
        style={{ y: yImage }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <Box
            component="img"
            alt='Profile Pic'
            src={pink}
            sx={{     
              width: { xs: 250, sm: 350, md: 450 },
              height: { xs: 250, sm: 350, md: 450 },
              borderRadius: '50%',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1
            }}
            className='hover:scale-110 transition-transform duration-300 border-2 border-[#c76acb]'
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#c76acb] blur-2xl opacity-20 -z-10 animate-pulse" />
          {/* Floating rings */}
          <motion.div
            className="absolute inset-0 border-2 border-[#c76acb]/30 rounded-full -z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.5 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </div>
      </motion.div>
 
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-white rounded-md p-4 max-w-4xl w-full h-[80%] relative">
            <button onClick={handleClose} className="absolute top-0 right-1 text-black font-bold text-lg">
             <CloseIcon />
            </button>
            <iframe src={Resume} title="Resume PDF" className="w-full h-full"/>
          </div>
        </div>
      )}
 
 
    </div>
  );
};
 
export default Home;
 
 
 
// import React, { useState, useEffect } from 'react';
// import pink from '../assets/pink.jpg';
// import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
// import Box from '@mui/material/Box';
// import Resume from '../assets/Preethi.pdf';
 
// const Home = () => {
//   const [showModal, setShowModal] = useState(false);
//   const containerRef = React.useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
 
//   // Check for mobile on mount and resize
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);
 
//   // Set up scroll-based animations
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });
  
//   // Create smoother parallax effects with damping
//   const yText = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "20%" : "50%"], {
//     clamp: false
//   });
  
//   const yImage = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "15%" : "30%"], {
//     clamp: false
//   });
  
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2], {
//     clamp: true
//   });
 
//   // Debugging - log scroll progress
//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log("Scroll progress:", latest);
//   });
 
//   const handleResume = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);
 
//   return (
//     <div
//       ref={containerRef}
//       name='home'
//       className={`relative grid grid-cols-1 md:grid-cols-2 px-4 w-full min-h-screen bg-black text-[#c76acb] overflow-hidden pt-[80px] ${
//         isMobile ? 'overflow-x-hidden' : ''
//       }`}
//     >
//       {/* Optimized Gradient Background */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {/* Performance-optimized radial gradient */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c76acb]/10 via-black/90 to-black" />
        
//         {/* Simplified grid pattern */}
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #c76acb33 1px, transparent 1px),
//               linear-gradient(to bottom, #c76acb33 1px, transparent 1px)
//             `,
//             backgroundSize: '20px 20px',
//             maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)'
//           }}
//         />
        
//         {/* Optimized floating particles */}
//         {[...Array(isMobile ? 10 : 20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-[#c76acb] will-change-transform"
//             style={{
//               width: `${Math.random() * 4 + 6}px`,
//               height: `${Math.random() * 4 + 6}px`,
//               left: `${Math.random() * 90 + 5}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: Math.random() * 0.2 + 0.2
//             }}
//             animate={{
//               y: [0, Math.random() * 30 - 15],
//               x: isMobile ? [0, 0] : [0, Math.random() * 20 - 10], // No horizontal movement on mobile
//               transition: {
//                 duration: Math.random() * 8 + 4,
//                 repeat: Infinity,
//                 repeatType: 'mirror',
//                 ease: 'easeInOut'
//               }
//             }}
//           />
//         ))}
//       </div>
 
//       {/* Left content with performance optimizations */}
//       <motion.div
//         className='max-w-[1000px] mx-auto px-4 lg:ml-16 xl:ml-44 flex flex-col justify-center h-full z-10 will-change-transform'
//         style={{ y: yText, opacity }}
//         initial={{ x: -100, opacity: 0 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{
//           duration: 0.8,
//           ease: [0.16, 0.77, 0.47, 0.97] // Custom ease curve for smoother entry
//         }}
//         viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//       >
//         <p className='text-xl md:text-4xl text-[#c76acb] mb-3'>Hi, this is</p>
//         <h1 className='text-4xl md:text-6xl font-bold text-[#6b7280]'>
//           I'm <span className='text-[#ccd6f6]'>Preethi S,</span>
//         </h1>
//         <h2 className='text-4xl md:text-6xl font-bold text-[#6b7280]'>Front-End Developer</h2>
//         <p className='text-xl md:text-2xl text-[#c76acb] mt-3'>
//           Specialized in building responsive websites with clean UI/UX designs.
//         </p>
//         <div className='mt-5'>
//           <button
//             onClick={handleResume}
//             className='group my-2 px-8 py-3 border-2 flex items-center text-black bg-white hover:bg-[#c76acb] hover:border-[#c76acb] rounded-md relative overflow-hidden will-change-transform'
//           >
//             <span className="relative z-10">My Resume</span>
//             <span className="absolute inset-0 bg-gradient-to-r from-[#c76acb] to-[#ccd6f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//         </div>
//       </motion.div>
 
//       {/* Right side avatar with performance optimizations */}
//       <motion.div
//         className='flex justify-center items-center z-10 px-4 will-change-transform'
//         style={{ y: yImage }}
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.2,
//           ease: [0.16, 0.77, 0.47, 0.97]
//         }}
//       >
//         <div className="relative max-w-[380px] md:max-w-[500px] w-full">
//           <Box
//             component="img"
//             alt='Profile Pic'
//             src={pink}
//             sx={{     
//               width: '100%',
//               height: 'auto',
//               aspectRatio: '1/1',
//               borderRadius: '50%',
//               objectFit: 'cover',
//               position: 'relative',
//               zIndex: 1
//             }}
//             className='hover:scale-105 transition-transform duration-300 border-2 border-[#c76acb] will-change-transform'
//             loading='eager'
//           />
//           {/* Optimized glow effect */}
//           <div className="absolute inset-0 rounded-full bg-[#c76acb] blur-xl opacity-10 -z-10" />
//           {/* Smoother floating ring */}
//           <motion.div
//             className="absolute inset-0 border border-[#c76acb]/20 rounded-full -z-20 will-change-transform"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1.1, opacity: 0.3 }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: 'mirror',
//               ease: 'easeInOut'
//             }}
//           />
//         </div>
//       </motion.div>
 
//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
//           <div className="bg-white rounded-md p-4 max-w-4xl w-full h-[80%] relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-0 right-1 text-black font-bold text-lg"
//             >
//               ✕
//             </button>
//             <iframe
//               src={Resume}
//               title="Resume PDF"
//               className="w-full h-full"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
 
// export default Home;
 