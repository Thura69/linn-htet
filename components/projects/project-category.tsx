import React from 'react'
import { ProjectTitle } from '../project-title'

interface ProjectCategoryType {
    data:string,
    title:string,
    color?:string
}

export const ProjectCategory:React.FC<ProjectCategoryType> = ({data,title,color = '#FFC529'}) => {
  return (
    <div className=''>
     <ProjectTitle color={color} title={title}/>
     <p>{data}</p>
    </div>
  )
}
