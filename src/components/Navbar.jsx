import React, {useState} from 'react'
import logo from '../assets/plogo.png.jpg'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-scroll';


const Navbar = () => {
const [nav , setNav] = useState(false);


const handleClick = () => {
    setNav(!nav);              // set to true
}

return (
    <div className='fixed w-full md:w-full h-[80px] flex justify-between items-center px-4 bg-black text-[#c76acb] z-50'>
        
        <div>
          <img src={logo} alt='Logo' style={{width:'120px'}}/>
        </div>

        {/* Menu */}
        <div>
            <ul className='cursor-pointer hidden md:flex'>
                <li><Link to='home' className='px-4 font-bold text-xl hover:text-[#ccd6f6]' smooth={true} spy={true} activeClass="active" duration={500}>Home</Link></li>
                <li><Link to='about' className='px-4 font-bold text-xl hover:text-[#ccd6f6]' smooth={true} spy={true} activeClass="active" duration={500}>About</Link></li>
                <li><Link to='skills' className='px-4 font-bold text-xl hover:text-[#ccd6f6]' smooth={true} spy={true} activeClass="active" duration={500}>Skills</Link></li>
                <li><Link to='work' className='px-4 font-bold text-xl hover:text-[#ccd6f6]' smooth={true} spy={true} activeClass="active" duration={500}>Work</Link></li>
                <li><Link to='project' className='px-4 font-bold text-xl hover:text-[#ccd6f6]' smooth={true} spy={true} activeClass="active" duration={500}>Projects</Link></li>
                <li><Link to='contact' className='px-4 font-bold text-xl hover:text-[#ccd6f6]' smooth={true} spy={true} activeClass="active" duration={500}>Contact</Link></li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden cursor-pointer z-40'>
           {!nav? <FaBars/>:<FaTimes/> }
        </div >

        {/* mobile menu */}
        <ul className={!nav? 'hidden': 'absolute z-50 top-0 left-0 w-full h-screen bg-black flex flex-col gap-14 justify-center items-center cursor-pointer'}>
            <li className='absolute top-3 right-4'>
                <div onClick={handleClick} className="text-xl bg-gray-700 text-white px-2 py-1 rounded cursor-pointer">
                 <CloseIcon />
                </div>
            </li>
            <li><Link className="text-4xl hover:text-[#ccd6f6]" onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link className="text-4xl hover:text-[#ccd6f6]" onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link className="text-4xl hover:text-[#ccd6f6]" onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li> 
            <li><Link className="text-4xl hover:text-[#ccd6f6]" onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
            <li><Link className="text-4xl hover:text-[#ccd6f6]" onClick={handleClick} to='project' smooth={true} duration={500}>Projects</Link></li>
            <li><Link className="text-4xl hover:text-[#ccd6f6]" onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
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
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar

