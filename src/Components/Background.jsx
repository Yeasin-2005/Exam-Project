import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Flex from './Flex'
import { SlCalender } from "react-icons/sl";
import h1 from "../assets/h1.png"

const Background = () => {
  return (
    <div>
        <div className='flex justify-center text-center pt-30 pb-15'>
            <SectionHead
        head="Behind the Pixels"
        titel="MY Background and
Achievements"
        className="text-center"
        />
        </div>
        {/* <ul className='bg-primary text-white items-center w-100 pl-1.25 pr-7.5 flex justify-between mx-auto py-1.25 rounded-2xl text-[15px] font-bold'>
            <li className='py-2.75 px-6.5 bg-black rounded-3xl'>Experiences</li>
            <li>Education</li>
            <li>Awards</li>
        </ul> */}
        <ul className='bg-primary text-white items-center mb-10 w-100 pl-1.25 pr-1.25 flex justify-between mx-auto py-1.25 rounded-2xl text-[15px] font-bold'>
    
    <li className='py-2.75 px-6.5 rounded-3xl bg-transparent cursor-pointer  hover:bg-black transition-colors duration-200'>
        Experiences
    </li>
    <li className='py-2.75 px-6.5 rounded-3xl bg-transparent cursor-pointer hover:bg-black transition-colors duration-200'>
        Education
    </li>
    <li className='py-2.75 px-6.5 rounded-3xl bg-transparent cursor-pointer hover:bg-black transition-colors duration-200'>
        Awards
    </li>
</ul>
      <Container className="border border-para p-15.5 rounded-2xl">
        <div>
            <Flex className="justify-between items-start pb-10">
            <Flex className="gap-5 items-start">
                <img src={h1} alt="" />
                <div className='text-white'>
                    <h2 className='text-xl'>Senior Product Designer</h2>
                    <h2>VirtusLab</h2>
                    <p className='text-para w-140'>I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields.</p>
                </div>
            </Flex>
            <Flex className="items-center gap-2">
                <SlCalender className='text-primary'/>
                <h2 className='text-white'>2022 - 2023</h2>
            </Flex>
        </Flex>
            <Flex className="justify-between items-start py-10 border-y border-primary">
            <Flex className="gap-5 items-start">
                <img src={h1} alt="" />
                <div className='text-white'>
                    <h2 className='text-xl'>Senior Product Designer</h2>
                    <h2>VirtusLab</h2>
                    <p className='text-para w-140'>I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields.</p>
                </div>
            </Flex>
            <Flex className="items-center gap-2">
                <SlCalender className='text-primary'/>
                <h2 className='text-white'>2022 - 2023</h2>
            </Flex>
        </Flex>
            <Flex className="justify-between items-start pt-10">
            <Flex className="gap-5 items-start">
                <img src={h1} alt="" />
                <div className='text-white'>
                    <h2 className='text-xl'>Senior Product Designer</h2>
                    <h2>VirtusLab</h2>
                    <p className='text-para w-140'>I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields.</p>
                </div>
            </Flex>
            <Flex className="items-center gap-2">
                <SlCalender className='text-primary'/>
                <h2 className='text-white'>2022 - 2023</h2>
            </Flex>
        </Flex>
        
        </div>
      </Container>
    </div>
  )
}

export default Background
