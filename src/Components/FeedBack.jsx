import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import SectionHead from './SectionHead'
import ClaintCard from './ClaintCard'

const FeedBack = () => {
  return (
    <div className='mt-30'>
      <Container>
        <Flex className="justify-between">
            <div>
                <SectionHead
        head="Clients feedback"
        titel="Let’s Hear From
Dear Clients."
        />
        <Button className="mt-10">Contact Me</Button>
            </div>
            <div className='flex-col flex gap-y-5'>
            <ClaintCard/>
            <ClaintCard/>
            </div>
        </Flex>

      </Container>
    </div>
  )
}

export default FeedBack
