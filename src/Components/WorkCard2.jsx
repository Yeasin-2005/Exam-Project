import React from 'react'
import Flex from './Flex'
import { GoArrowUpRight } from "react-icons/go";

const WorkCard2 = ({ImgSrc}) => {
  return (
    <div className='w-144.75 bg-black p-6.25 rounded-3xl'>
      <img src={ImgSrc} alt="" />
     <Flex className="justify-between pt-8.75">
        <div>
            <h2 className='text-xl font-bold text-white'>Deloitte</h2>
            <p>Project was about precision and information...</p>
        </div>
        <div className='h-15 w-15 rounded-full border border-para flex justify-center items-center'>
            <GoArrowUpRight className='text-white'/>
        </div>
    </Flex> 
    </div>
  )
}

export default WorkCard2
