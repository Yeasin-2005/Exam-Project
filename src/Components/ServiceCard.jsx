import React from 'react'

const ServiceCard = ({titel,ImgSrc}) => {
  return (
    <div className='w-102.5 py-7.5 pl-7.5 pr-12 bg-black rounded-2xl'>
        <img src={ImgSrc} alt="" />
        <h2 className='text-white text-3xl font-bold pt-8.5 pb-3.75'>{titel}</h2>
        <p className='text-para'>Conducting qualitative and quantitative
research to understand user needs,
behaviors, and pain points. Utilizing
methods such as surveys, interviews, and
usability testing to actionable insights.</p>
        <ul className='text-white pt-5.5'>
            <li>UI/UX Design</li>
            <li>Research</li>
            <li>Mobile & Web App</li>
        </ul>
      
    </div>
  )
}

export default ServiceCard
