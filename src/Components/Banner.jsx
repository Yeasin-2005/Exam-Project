import React from 'react'
import round from "../assets/round.png"
import banner from "../assets/banner.png"
import arrow from "../assets/arrow.png"
import { FaArrowUpLong } from "react-icons/fa6";
import Flex from "../Components/Flex"

const Banner = () => {
    return (
        <div>
            <div className='mt-30.25 w-470 mx-auto '>
                <div className='flex justify-center items-center gap-16.25 text-white text-[203px] font-bold'>
                    <h2>Hello</h2>
                    <img src={round} alt="" />
                    <h2>Motion</h2>
                </div>
                <div className='flex items-center gap-55.5 justify-end'>
                    <img src={banner} alt="" />
                    <div className='flex gap-22.5'>
                        <div className='text-white w-77.5'>
                            <p>My role as a amplify tha story through
                                my careful [Video Editor] selection of
                                footages, pacing, and visual style. My
                                keen attention to detail allows me to
                                enhance the mood.</p>
                            <h2 className='font-bold text-9xl py-3 border-y border-white my-7'>12+</h2>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='h-11.5 w-11.5 rounded-full mt-15 border border-primary flex justify-center items-center'><FaArrowUpLong className='text-primary text-xl' /></div>
                    </div>
                </div>
            </div>
            {/* <Flex className="items-center justify-center">
                <div className='h-px bg-secondary '></div>
                <h2 className='block text-primary text-center'>100+ <span className='text-white'>Trusted Clients Over the world</span></h2>
                <div className='h-px w-full bg-secondary '></div>
            </Flex> */}
        </div>
    )
}

export default Banner
