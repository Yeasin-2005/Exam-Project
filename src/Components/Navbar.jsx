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
            <img src={logo} alt="" />
            <ul className='flex items-center gap-8.75'>
                <li>Works</li>
                <li>Resume</li>
                <li>Skills</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
            <div className='flex items-center gap-6.25'>
                <ul className='flex items-center gap-2.25'>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center'><FaFacebookF /></li>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center'><FaLinkedinIn /></li>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center'><IoLogoGithub /></li>
                    <li className='h-7.5 w-7.5 rounded-full border border-white flex justify-center items-center'><IoBasketballOutline /></li>
                </ul>
                <Button>Lets Talk </Button>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
