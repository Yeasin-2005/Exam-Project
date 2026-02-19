import React, { Children } from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = ({children,className}) => {
  return (
    <button className={`text-white px-8 py-3.75 rounded-3xl font-bold text-[15px] flex items-center gap-1.5 bg-primary cursor-pointer ${className}`}>{children}<GoArrowUpRight/></button>
  )
}

export default Button
