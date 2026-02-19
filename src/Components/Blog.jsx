import React from 'react'
import SectionHead from './SectionHead'
import Container from './Container'
import BlogCard from './BlogCard'
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

const Blog = () => {
  return (
    <div>
      <div className='flex justify-center text-center pt-30 pb-15'>
            <SectionHead
        head="Behind the Pixels"
        titel="Read My Recent Blog"
        className="text-center"
        />
        </div>
        <Container className="flex justify-between">
            <BlogCard
            ImgSrc={blog1}
            title="business
Nov 01, 2025"
            head="The Role of Technology
in Modern Log"
            />
            <BlogCard
            ImgSrc={blog2}
            title="Development
Aug 01, 2025"
            head="The Role of Technology
in Modern Log"
            />
            <BlogCard
            ImgSrc={blog3}
            title="Portfolio
Nov 01, 2025"
            head="Digital Marketo to
Their New Office."
            />
        </Container>
    </div>
  )
}

export default Blog
