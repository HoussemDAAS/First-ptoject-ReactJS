import React from 'react'
import './CoreConcepts.css'
const CoreConcepts = (details) => {
  return (
    <li id='core-concepts'>
    <img src={details.image} alt="" />
 <h2>{details.title}</h2>
 <p>{details.description}</p>
  </li>
  )
}

export default CoreConcepts
