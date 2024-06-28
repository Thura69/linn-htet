import React from 'react'
import { motion, useMotionValue, useSpring } from "framer-motion";


export const NoMotionCircle = () => {
  return (
    <motion.div className='w-[250px] h-[250px] bg-[#f2f2f0] rounded-full'></motion.div>
  )
}
