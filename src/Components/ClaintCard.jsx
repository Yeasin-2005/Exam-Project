import React from 'react'
import Flex from './Flex'
import { IoStar } from "react-icons/io5";
import claint from "../assets/claint.png"

const ClaintCard = () => {
  return (
    <div className='w-187.5 py-6 px-7.5 border border-primary rounded-2xl'>
        <Flex className="justify-between items-end">
            <Flex>
            <img src={claint} alt="" />
            <div>
                <h2 className='text-white'>Tim Bailey</h2>
            <p>SEO Specialist, Theme Junction</p>
            </div>
            </Flex>
            <Flex className="gap-2">
                <IoStar className='text-primary'/>
                <IoStar className='text-primary'/>
                <IoStar className='text-primary'/>
                <IoStar className='text-primary'/>
                <IoStar className='text-primary'/>
            </Flex>
        </Flex>
        <p className='pt-7 border-t border-para mt-6'>“Taylor is a professional Designer really helps my business by providing
value to my business. Taylor is a professional Designer he really helps my
business by providing value to my business. Taylor is a professional.
Helps business providing value to my business. professional Designer he
really helps my business</p>
      
    </div>
  )
}

export default ClaintCard
