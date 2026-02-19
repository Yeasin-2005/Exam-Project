import React from 'react'

import Flex from './Flex'

const WorkCard = ({ImgSrc,para,head,percentager}) => {
    return (
        <div className='w-76 bg-black py-10 px-7 text-white rounded-2xl'>
            <Flex className=" gap-4.5 items-center">
                <img src={ImgSrc} alt="" />
                <h2 className='w-32 text-[20px]'>{head}</h2>
            </Flex>
            <p className='pt-4 pb-11.75'>{para}</p>
            <h2 className='text-end'>{percentager}</h2>
            <div className='w-full h-0.5 bg-white'></div>
        </div>
    )
}

export default WorkCard
