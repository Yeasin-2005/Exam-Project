import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Flex from "../Components/Flex"
import ServiceCard from './ServiceCard'
import web from "../assets/web.png"
import uiux from "../assets/uiux.png"
import content from "../assets/content.png"
import Button from './Button'

const MyService = () => {
  return (
    <>
      <Container>
        <div className='flex justify-center pt-30 pb-15'>
            <SectionHead
        head="my services"
        titel="Here's how I can help!"
        className="text-center"
        />
        </div>
        <Flex className="justify-between">
          <ServiceCard
          ImgSrc={web}
          titel="Web Development"
          />
          <ServiceCard
          ImgSrc={uiux}
          titel="UI/UX Design"
          />
          <ServiceCard
          ImgSrc={content}
          titel="Content Writing"
          />
        </Flex>
        <Button className="w-full! justify-center flex py-6.25! mt-7.5">Let’s Contact with Me</Button>
        
      </Container>
    </>
  )
}

export default MyService
