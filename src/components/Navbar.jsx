import React from 'react'
import logo from "../assets/eric-logo.png"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="px-4 flex items-center justify-between py-2">
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
        <img src={logo} alt='Logo' className='w-[2.5rem] h-[2.5rem]'/>
        </a>
      </div>
      <div className="py-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/eric-deo-alamsyah-b8817b293/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        className='hover:scale-150 transition-all duration-200 ease-in-out hover:text-blue-600'>
          <FaLinkedin/>
        </a>
        <a href="https://github.com/erickdeoalamsyah"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='github'
        className='hover:scale-150 transition-all duration-200 ease-in-out hover:text-white'>
          <FaGithub/>
        </a>
        <a href="https://www.instagram.com/erickdeoalamsyah/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
        className='hover:scale-150 transition-all duration-200 ease-in-out'>
          <FaInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/eric-deo-alamsyah-b8817b293/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Email'
        className='hover:scale-150 transition-all duration-200 ease-in-out '>
          <MdOutlineMail />
        </a>
      </div>
      
    </nav>
  )
}
export default Navbar;
