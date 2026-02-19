import React from 'react'

const BlogCard = ({ImgSrc,title,head}) => {
  return (
    <div className='bg-black pt-4 pl-4 pr-4 pb-8 w-103 rounded-lg'>
        <img src={ImgSrc} alt="" />
        <p className='pt-9 pb-4'>{title}</p>
        <h2 className='text-white text-2xl font-semibold uppercase'>{head}</h2>
      
    </div>
  )
}

export default BlogCard
