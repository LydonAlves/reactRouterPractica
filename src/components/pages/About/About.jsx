import React from 'react'
import './About.css'
import { useParams } from 'react-router-dom'

const About = () => {
  const parameter = useParams()
  console.log(parameter)

  return (
    <div className='about pageDiv'>
      <h1>{parameter.heading}</h1>
    </div>
  )
}

export default About
