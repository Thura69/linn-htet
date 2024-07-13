import React from 'react'
import { ProjectTitle } from '../project-title'

interface SquareMap {
    title:string,
    data:string[]
}


export const SquareMap:React.FC<SquareMap> = ({title,data}) => {
  return (
    <div>
        <ProjectTitle title={title}/>
       <div className='flex flex-wrap justify-start gap-3'>
       {
            data.map((e,index)=><div className='w-[18%]  border h-auto p-5 border-[#FFC529] rounded-2xl'>{e}</div>)
        }
       </div>
    </div>
  )
}