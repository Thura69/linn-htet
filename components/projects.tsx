import React from 'react'
import Double from './projects/double'
import { projects } from './projects/data'


export const Projects = () => {
  return (
    <div className="">
    <Double projects={[projects[0], projects[1]]}/>
    <Double projects={[projects[2], projects[3]]} reversed={true}/>
    <Double projects={[projects[4], projects[5]]}/>
    <Double projects={[projects[6], projects[7]]} reversed={true}/>
  </div>
  )
}
