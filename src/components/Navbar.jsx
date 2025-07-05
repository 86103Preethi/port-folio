import React, {useState} from 'react'
import logo from '../assets/plogo.png.jpg'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';


const Navbar = () => {
const [nav , setNav] = useState(false);


const handleClick = () => {
    setNav(!nav);              // set to true
}

return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-[#c76acb]' >
        
        <div>
          <img src={logo} alt='Logo' style={{width:'120px'}}/>
        </div>

        {/* Menu */}
        <div className=''>
            <ul className='cursor-pointer hidden md:flex'>
                <li className='px-4 font-bold text-xl'><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='px-4 font-bold text-xl'><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li className='px-4 font-bold text-xl'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='px-4 font-bold text-xl'><Link to='work' smooth={true} duration={500}>Work</Link></li>
                <li className='px-4 font-bold text-xl'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
           {!nav? <FaBars/>:<FaTimes/> }
        </div >

        {/* mobile menu */}
        <ul className={!nav? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center cursor-pointer'}>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li> 
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-gray-800 '>
                    <a className='flex justify-between items-center ml-5 w-full text-gray-300'
                    href='https://github.com/86103Preethi' target="_blank" rel="noreferrer">
                        Github <FaGithub style={{marginRight:"15px"}} size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600 '>
                <a className='flex justify-between items-center ml-5 w-full text-gray-300'
                    href='https://www.linkedin.com/in/preethi-s-6a44061b1/ ' target="_blank" rel="noreferrer">
                        Linkedln <FaLinkedin style={{marginRight:"15px"}} size={30}/>
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#f34440]'>
                    <a className='flex justify-between items-center ml-5 w-full text-gray-300'
                    href='/preethis835@gmail.com' target="_blank" rel="noreferrer">
                        Email Id<HiOutlineMail style={{marginRight:"15px"}} size={30}/>
                    </a>
                </li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar