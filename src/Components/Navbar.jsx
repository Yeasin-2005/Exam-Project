import React from 'react'
import logo from "../assets/logo.png"
import Button from './Button'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoBasketballOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='bg-black'>
            <nav className='w-477.5 mx-auto text-white px-16.25 flex justify-between items-center py-5'>
            <img src={logo} alt="" className='cursor-pointer'/>
            <ul className='flex items-center gap-8.75'>
                <li className='cursor-pointer'>Works</li>
                <li className='cursor-pointer'>Resume</li>
                <li className='cursor-pointer'>Skills</li>
                <li className='cursor-pointer'>Testimonials</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className='flex items-center gap-6.25'>
                <ul className='flex items-center gap-2.25'>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center cursor-pointer'><FaFacebookF /></li>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center cursor-pointer'><FaLinkedinIn /></li>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center cursor-pointer'><IoLogoGithub /></li>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center cursor-pointer'><IoBasketballOutline /></li>
                </ul>
                <Button>Lets Talk </Button>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
