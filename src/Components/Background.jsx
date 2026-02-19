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
