import React from 'react'

const SectionHead = ({head,className,titel}) => {
  return (
    <div className='w-125'>
      <h2 className={`font-semibold text-primary text-[12px] pb-6.5 ${className}`}>{head}</h2>
      <h2 className='text-white  text-[45px] font-bold leading-12 '>{titel}</h2>
    </div>
  )
}

export default SectionHead
