import React from 'react'
import Flex from './Flex'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";


const Footer = () => {
  return (
    <footer className='pt-30 pb-7.5 mt-30'>
    <Container>
      <Flex className="items-start justify-between">
        <div className='w-85'>
          <img src={logo} alt="" />
          <h3 className='pt-8 pb-4.5 text-white'>
I break down complex user the experience
problems the create integrity focused to
solutions that’s connect.
          </h3>
          <Flex className="text-white gap-2 ">
            
            <div className='h-7.5 w-7.5 rounded-full border border-para flex justify-center items-center'>
            <FaFacebookF />
            </div>
            <div className='h-7.5 w-7.5 rounded-full border border-para flex justify-center items-center'>
            <FaInstagram />
            </div>
            <div className='h-7.5 w-7.5 rounded-full border border-para flex justify-center items-center'>

            </div>
            <div className='h-7.5 w-7.5 rounded-full border border-para flex justify-center items-center'>
            <FaLinkedinIn />
            </div>
          </Flex>
        </div>
        <div className='text-white'>
          <h2 className='text-xl font-semibold'>Legal Details</h2>
          <ul className='flex flex-col gap-y-3 pt-8.75'>
            <li>Policy Privacy</li>
            <li>Term & Conditions</li>
            <li>Refund and Cancellation</li>
            <li>Disclaimer</li>
          </ul>
        </div>
        <div className='text-white'>
          <h2 className='text-xl font-semibold'>Contact</h2>
          <ul className='flex flex-col gap-y-3 pt-8.75'>
            <li>hello-designer@gerold.com </li>
            <li>+01 123 654 8096</li>
            <li>+01 123 654 8096</li>
          </ul>
        </div>
        <div className='text-white'>
          <h2 className='text-xl font-semibold w-47'>Subscribe to My Newsletter!</h2>
          <ul className='flex  gap-2  pt-8.75'>
            <input type="text" className='w-59.75 bg-white border-4 rounded-3xl text-black  border-black '/>
            <li className='h-15 w-15 rounded-full bg-black flex justify-center items-center text-white'>
              <MdOutlineArrowOutward />
            </li>
          </ul>
        </div>
      </Flex>
    </Container>
    </footer>
  )
}

export default Footer
