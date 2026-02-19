import React from 'react'
import Container from './Container'
import Flex from './Flex'
import man from "../assets/man.png"
import SectionHead from './SectionHead'
import Button from './Button'

const Behaind = () => {
    return (
        <div className='text-white bg-black py-30 mt-30'>
            <Container>
                <Flex className="gap-40">
                    <img src={man} alt="" />
                    <div className='w-60%'>
                        <SectionHead
                            head="Behind the Pixels"
                            titel="Passionate On Digital
Marketer Focused on
Driving Results."
                        />
                        <p className='text-para w-120 py-7.5'>This encompasses a variety of strategies, including search
                            engine optimization (SEO), content marketing, social media
                            marketing, email marketing,.</p>
                            <Flex className='pt-6 pb-7 pr-10 pl-8.5 bg-body rounded-2xl justify-between mb-8'>
                                <div>
                                    <h2 className='text-primary text-5xl font-semibold'>30+</h2>
                                    <p className='text-para w-22.5'>Years of Experience</p>
                                </div>
                                <div className='px-8.5 border-x border-para'>
                                    <h2 className='text-primary text-5xl font-semibold'>100+</h2>
                                    <p className='text-para w-22.5'>Project
Completed</p>
                                </div>
                                <div>
                                    <h2 className='text-primary text-5xl font-semibold'>300+</h2>
                                    <p className='text-para w-22.5'>Successful
Project</p>
                                </div>
                            </Flex>
                            <Button>Learn More</Button>

                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Behaind
