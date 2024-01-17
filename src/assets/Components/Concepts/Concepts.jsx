import React from 'react'
import CoreConcepts from '../CoreConcepts/CoreConcepts'
import { CORE_CONCEPTS } from '../../../data'
const Concepts = () => {
  return (

  <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>



    
  )
}

export default Concepts
