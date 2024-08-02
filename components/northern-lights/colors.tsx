import { cn } from '@/lib/utils'
import React from 'react'

export const Colors = ({color}:{color:string}) => {
  return (
    <div className={'border p-1 border-black  inline-block rounded-full '}>
        <div className={cn(' w-[40px] h-[40px] md:w-[55px] md:h-[55px]  cursor-pointer hover:scale-110 duration-300 rounded-full ', `${color}`)}></div>
    </div>
  )
}

