// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const About = () => {
//   const headerRef = useRef(null);
//   const leftContentRef = useRef(null);
//   const rightContentRef = useRef(null);
//   const sectionRef = useRef(null);
//   const animationRef = useRef(null); // To store our animations

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Clear any existing animations first
//     if (animationRef.current) {
//       animationRef.current.forEach(anim => anim.kill());
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     }

//     // Set initial state (hidden and positioned off-screen)
//     gsap.set([headerRef.current, leftContentRef.current, rightContentRef.current], {
//       opacity: 0
//     });
    
//     // Specifically position the left and right content off-screen
//     gsap.set(leftContentRef.current, { x: -100 });
//     gsap.set(rightContentRef.current, { x: 100 });

//     // Create animations
//     animationRef.current = [
//       // Header animation (from left)
//       gsap.to(headerRef.current, {
//         opacity: 1,
//         x: 0,
//         duration: 0.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: headerRef.current,
//           start: "top 80%",
//           toggleActions: "play restart none none", // Changed to restart
//           markers: false // Set to true for debugging
//         }
//       }),
      
//       // Left content animation (from left)
//       gsap.to(leftContentRef.current, {
//         opacity: 1,
//         x: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: leftContentRef.current,
//           start: "top 80%",
//           toggleActions: "play restart none none", // Changed to restart
//           markers: false
//         }
//       }),
      
//       // Right content animation (from right)
//       gsap.to(rightContentRef.current, {
//         opacity: 1,
//         x: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: rightContentRef.current,
//           start: "top 80%",
//           toggleActions: "play restart none none", // Changed to restart
//           markers: false
//         }
//       })
//     ];

//     // Refresh ScrollTrigger
//     ScrollTrigger.refresh();

//     return () => {
//       // Cleanup on unmount
//       if (animationRef.current) {
//         animationRef.current.forEach(animation => animation.kill());
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} name='about' className='h-screen bg-black text-[#6b7280] flex items-center'>
//       <div className='max-w-[1000px] mx-auto w-full'>
//         {/* Header */}
//         <div className='grid grid-cols-2 gap-8'>
//           <div 
//             ref={headerRef}
//             className='sm:text-right pb-8 pl-4'
//           >
//             <p className='text-[#ccd6f6] text-4xl font-bold inline border-b-4 border-[#c76acb]'>About</p>
//           </div>
//         </div>

//         {/* Content */}
//         <div className='grid sm:grid-cols-2 gap-8 px-5 items-center'>
//           <div
//             ref={leftContentRef}
//             className='sm:text-right text-4xl font-bold text-[#ccd6f6]'
//           >
//             <p>Nice to meet you.<br />Please take a look around.</p>
//           </div>

//           <div
//             ref={rightContentRef}
//             className='text-lg text-[#d1d5db] border-l-4 border-[#c76acb] pl-4 py-4'
//           >
//             <p>I've worked in multiple areas of website design for a startup, collaborating with UI/UX designers and backend teams. I have hands-on experience with React.js and Svelte.js. My passion lies in solving real-world problems through web technologies.</p>
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

