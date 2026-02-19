import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import WorkCard2 from './WorkCard2'
import work1 from "../assets/work1.png"
import Flex from './Flex'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Work = () => {
  return (
    <div className='w-465 mx-auto px-10 mt-30'>
      <Container>
        <Flex className="justify-between items-end">
        <SectionHead
        head="My Recent Work"
        titel="Recent work for MY clients!"
        />
        <Flex className="gap-4">
            <div className='h-15 w-15 rounded-full border border-para flex justify-center items-center'><FaArrowLeftLong className='text-white'/></div>
            <div className='h-15 w-15 rounded-full border border-para flex justify-center items-center'><FaArrowRightLong className='text-white'/></div>
        </Flex>
        </Flex>
      </Container>
      <Flex className="justify-between pt-15">
        <WorkCard2
      ImgSrc={work1}
      />
      <WorkCard2
      ImgSrc={work1}
      />
      <WorkCard2
      ImgSrc={work1}
      />
      </Flex>
    </div>
  )
}

export default Work
